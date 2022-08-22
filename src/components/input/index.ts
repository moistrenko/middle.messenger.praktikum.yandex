import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.sass";

Handlebars.registerPartial("input", tpl);

export default (
	inputClass: string,
	inputType: string,
	inputName: string,
	placeholder: string
) => {
	return tpl({ inputClass, inputType, inputName, placeholder });
};
