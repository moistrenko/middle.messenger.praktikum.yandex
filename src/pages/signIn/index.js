import input from "../../components/input/index";
import button from "../../components/button/index";
import tpl from "./tpl.hbs";
import "./index.sass";

const props = {
	inputs: [
		{ inputClass: "login", inputType: "text", inputName: "login", placeholder: "Login" },
		{ inputClass: "password", inputType: "password", inputName: "password", placeholder: "Password" },
	],
};

export default tpl(props);
