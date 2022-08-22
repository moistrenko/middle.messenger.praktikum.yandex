import '../../components/input';
import '../../components/button/index';
import tpl from './tpl.hbs';
import './style.sass';

const props = {
  inputs: [
    {
      inputClass: 'login',
      inputType: 'text',
      inputName: 'login',
      placeholder: 'Login',
    },
    {
      inputClass: 'password',
      inputType: 'password',
      inputName: 'password',
      placeholder: 'Password',
    },
  ],
};

export default tpl(props);
