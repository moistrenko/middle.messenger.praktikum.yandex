import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.sass';

Handlebars.registerPartial('input', tpl);

export default (props) => {
	return tpl(props);
}