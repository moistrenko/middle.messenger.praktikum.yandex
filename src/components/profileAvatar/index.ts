import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.sass';

Handlebars.registerPartial('profileAvatar', tpl);

export default (avatar: string) => tpl(avatar);
