import input from "../../components/input/index";
import tpl from "./tpl.hbs";
import "./index.sass";

const props = {
	inputs: [
		{ inputClass: "login", inputType: "text", inputName: "login", placeholder: "login" },
		{ inputClass: "password", inputType: "password", inputName: "password", placeholder: "password" },
	],
};

export default tpl(props);
