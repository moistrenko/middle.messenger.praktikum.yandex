import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.sass";

Handlebars.registerPartial("input", tpl);

export default (inputClass, inputName, placeholder) => {
	return tpl(inputClass, inputType, inputName, placeholder);
};
