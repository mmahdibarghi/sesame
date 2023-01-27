import { darkblue, darkred, midblue, white } from "../components/colors";

export const config = (title, message, type) => {
  return {
    title,
    customClass: {
      title: "text-white",
      htmlContainer: "text-white",
    },
    background: darkblue,
    text: message,
    confirmButtonColor: darkred,
    confirmButtonText: "تایید",
    color: "white",
    imageUrl:
      type == "error"
        ? require("../../../assets/faildLogo.png").default
        : require("../../../assets/logo.png").default,
    imageHeight: 150,
  };
};
