import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.sass";

Handlebars.registerPartial("button", tpl);

export default (buttonClass: string, buttonValue: string) => {
	return tpl({ buttonClass, buttonValue });
};
