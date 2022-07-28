import './src/styles/reset.sass'
import './src/styles/main.sass'
import signIn from './src/pages/signIn'
import signUp from './src/pages/signUp'
import chat from './src/pages/chat'
import page404 from './src/pages/404';
import page500 from './src/pages/500';

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
	case '/500':
		root.innerHTML = page500;
		break
	case '/chat':
		root.innerHTML = chat;
		break
	default:
		root.innerHTML = page404;
}
