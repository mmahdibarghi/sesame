import { decode } from "jsonwebtoken";
import axios from "axios";

const ACCESS_TOKEN_KEY = "access";
const REFRESH_TOKEN_KEY = "refresh";

class Auth {
	async checkLogin() {
		const access = this.getToken("access");
		const refresh = this.getToken("refresh");
		if (this.isTokenExpired(access)) {
			if (this.isTokenExpired(refresh)) {
				return null;
			} else {
				const newAccess = await this.getNewAccessToken(refresh);
				return newAccess;
			}
		} else {
			return access;
		}
	}
	checkHasConfirmed() {
		return decode(localStorage.getItem("access")).has_confirmed;
	}
	async getNewAccessToken(refresh) {
		const formData = new FormData();
		formData.append("refresh", refresh);
		try {
			const { data } = await axios.post(
				"http://127.0.0.1:8000/users/token/refresh/",
				formData
			);
			
			this.setAccessToken(data.access);
			return data.access;
		} catch (e) {
			console.log(e);
		}
	}

	isTokenExpired(token) {
		if (token == "" || !token) return true;
		try {
			const decoded = decode(token);
			return decoded.exp ? decoded.exp < Date.now() / 1000 : false;
		} catch (err) {
			return false;
		}
	}

	getToken(key) {
		// Retrieves the user token from localStorage
		return localStorage.getItem(key);
	}

	login(key, token) {
		// Saves user token to localStorage
		localStorage.setItem(key, token);
		// reloads the page
		// window.location.assign('/');
	}

	setRefreshToken(ref) {
		localStorage.setItem("refresh", ref);
	}
	setAccessToken(acc) {
		localStorage.setItem("access", acc);
	}
	logout() {
		this.setAccessToken("");
		this.setRefreshToken("");
		window.location.reload();
	}
}

const auth = new Auth();

export default auth;
