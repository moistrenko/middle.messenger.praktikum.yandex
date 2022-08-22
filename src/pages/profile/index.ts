import '../../components/profileAvatar';
import '../../components/profileInput';
import avatar from '../../assets/img/avatar.png';
import tpl from './tpl.hbs';
import './style.sass';

const props = {
  avatar,
  inputs: [
    {
      isInput: false,
      id: '',
      name: '',
      title: 'Mail',
      type: '',
      value: 'pochta@yandex.ru',
      placeholder: '',
    },
    {
      isInput: false,
      id: '',
      name: '',
      title: 'Login',
      type: '',
      value: 'ivanivanov',
      placeholder: '',
    },
    {
      isInput: false,
      id: '',
      name: '',
      title: 'Name',
      type: '',
      value: 'Ivan',
      placeholder: '',
    },
    {
      isInput: false,
      id: '',
      name: '',
      title: 'Surname',
      type: '',
      value: 'Ivanov',
      placeholder: '',
    },
    {
      isInput: false,
      id: '',
      name: '',
      title: 'Name in chat',
      type: '',
      value: 'Ivan',
      placeholder: '',
    },
    {
      isInput: false,
      id: '',
      name: '',
      title: 'Phone',
      type: '',
      value: '+7 (909) 967 30 30',
      placeholder: '',
    },
  ],
};

export default tpl(props);
