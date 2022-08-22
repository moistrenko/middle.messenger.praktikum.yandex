import input from "../../components/input/index";
import button from "../../components/button/index";
import tpl from "./tpl.hbs";
import "./index.sass";

const props = {
	inputs: [
		{ 
			inputClass: "Email",
			inputType: "email",
			inputName: "email",
			placeholder: "Email"
		},
		{
			inputClass: "login",
			inputType: "text",
			inputName: "login",
			placeholder: "Login"
		},
		{
			inputClass: "Name",
			inputType: "text",
			inputName: "first_name",
			placeholder: "Name"
		},
		{
			inputClass: "Surname",
			inputType: "text",
			inputName: "second_name",
			placeholder: "Surname"
		},
		{
			inputClass: "Phone",
			inputType: "phone", 
			inputName: "phone",
			placeholder: "Phone"
		},
		{
			inputClass: "password",
			inputType: "password",
			inputName: "password",
			placeholder: "Password"
		},
		{
			inputClass: "Confrim Password",
			inputType: "password",
			inputName: "password",
			placeholder: "Confrim Password"
		},
	],
};

export default tpl(props);
