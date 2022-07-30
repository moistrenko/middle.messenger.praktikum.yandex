import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.sass";

Handlebars.registerPartial("profileInput", tpl);

export default (isInput, id, name, title, type, value, placeholder) => {
	return tpl(isInput, id, name, title, type, value, placeholder);
};
