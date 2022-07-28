import './src/styles/reset.sass'
import './src/styles/main.sass'
import signIn from './src/pages/signIn'
import signUp from './src/pages/signUp'
import page404 from './src/pages/404';

const root = document.getElementById('root');
const path = window.location.pathname;

switch (path) {
	case '/':
		root.innerHTML = signIn;
		break;
	case '/sign-in':
		root.innerHTML = signIn;
		break;
	case '/sign-up':
		root.innerHTML = signUp;
		break;
	case '/chats':
		root.innerHTML = signUp;
		break
	default:
		root.innerHTML = page404;
}
