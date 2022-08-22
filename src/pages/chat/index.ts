import tpl from './tpl.hbs';
import './style.sass';

const props = {
  inputClass: 'search',
  inputType: 'text',
  inputName: 'search',
  placeholder: 'Search',
};
export default tpl(props);
