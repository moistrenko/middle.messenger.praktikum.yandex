import profileAvatar from '../../components/profileAvatar';
import avatar from '../../assets/img/avatar.png'
import tpl from './tpl.hbs';
import './index.sass';

props = {
	avatar: avatar
}

export default tpl(props)