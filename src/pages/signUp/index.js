import input from "../../components/input/index";
import button from "../../components/button/index";
import tpl from "./tpl.hbs";
import "./index.sass";

const props = {
	inputs: [
		{ inputClass: "Email", inputType: "Email", inputName: "Email", placeholder: "Email" },
		{ inputClass: "login", inputType: "text", inputName: "login", placeholder: "Login" },
		{ inputClass: "Name", inputType: "Name", inputName: "Name", placeholder: "Name" },
		{ inputClass: "Surname", inputType: "Surname", inputName: "Surname", placeholder: "Surname" },
		{ inputClass: "Phone", inputType: "Phone", inputName: "Phone", placeholder: "Phone" },
		{ inputClass: "Name", inputType: "Name", inputName: "Name", placeholder: "Name" },
		{ inputClass: "password", inputType: "password", inputName: "password", placeholder: "Password" },
		{ inputClass: "Confrim Password", inputType: "Confrim Password", inputName: "Confrim Password", placeholder: "Confrim Password" },
	],
};

export default tpl(props);
