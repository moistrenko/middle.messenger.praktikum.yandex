import tpl from './tpl.hbs';
import './index.sass';

const props = {
  inputClass: 'search',
  inputType: 'text',
  inputName: 'search',
  placeholder: 'Search',
};
export default tpl(props);
