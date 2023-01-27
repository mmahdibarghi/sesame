import axios from "axios";
import Auth from "./auth";

const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:8000/",
});

axiosInstance.interceptors.request.use(
	async function (config) {
		const token = await Auth.checkLogin();
		config.headers["Authorization"] = `Bearer ${token}`;
		config.headers["accept-language"] = "fa";
		// console.log(`Request ${config} Sending`);
		return config;
	},
	null,
	{ synchronous: true }
);

export default axiosInstance;
