import './src/styles/reset.sass'
import './src/styles/main.sass'
import navigation from './src/pages/navigation'
import signIn from './src/pages/signIn'
import signUp from './src/pages/signUp'
import chat from './src/pages/chat'
import profile from './src/pages/profile'
import profileChange from './src/pages/profileChange'
import changePassword from './src/pages/changePassword'
import page404 from './src/pages/404';
import page500 from './src/pages/500';

const root = document.getElementById('root')!;
const path = window.location.pathname;

switch (path) {
	case '/':
		root.innerHTML = navigation;
		break;
	case '/sign-in':
		root.innerHTML = signIn;
		break;
	case '/sign-up':
		root.innerHTML = signUp;
		break;
	case '/chat':
		root.innerHTML = chat;
		break
	case '/profile':
		root.innerHTML = profile;
		break
	case '/profile-change':
		root.innerHTML = profileChange;
		break
	case '/change-password':
		root.innerHTML = changePassword;
		break
	case '/500':
		root.innerHTML = page500;
		break
	case '/404':
		root.innerHTML = page404;
		break

	default:
		root.innerHTML = page404;
}
