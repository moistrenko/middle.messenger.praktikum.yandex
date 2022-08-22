import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.sass";

Handlebars.registerPartial("profileInput", tpl);

export default (
	isInput: boolean,
	id: string,
	name: string,
	title: string,
	type: string,
	value: string,
	placeholder: string
) => {
	return tpl({ isInput, id, name, title, type, value, placeholder });
};
