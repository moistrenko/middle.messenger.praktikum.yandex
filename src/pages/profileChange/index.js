import profileAvatar from "../../components/profileAvatar";
import profileInput from "../../components/profileInput";
import avatar from "../../assets/img/avatar.png";
import button from "../../components/button"
import tpl from "./tpl.hbs";
import "./index.sass";

props = {
	avatar: avatar,
	buttonValue: 'Save',
	buttonClass: 'btn-change',
	inputs: [
		{
			isInput: true,
			id: "profile-email",
			name: "email",
			title: "Mail",
			type: "email",
			value: "pochta@yandex.ru",
			placeholder: "Mail",
		},
		{
			isInput: true,
			id: "profile-login",
			name: "login",
			title: "Login",
			type: "text",
			value: "ivanivanov",
			placeholder: "Login",
		},
		{
			isInput: true,
			id: "profile-first_name",
			name: "first_name",
			title: "Name",
			type: "text",
			value: "Ivan",
			placeholder: "Name",
		},
		{
			isInput: true,
			id: "proflie-second_name",
			name: "second_name",
			title: "Surname",
			type: "text",
			value: "Ivanov",
			placeholder: "Surname",
		},
		{
			isInput: true,
			id: "profile-name_in_chat",
			name: "name_in_chat",
			title: "Name in chat",
			type: "text",
			value: "Ivan",
			placeholder: "Name in chat",
		},
		{
			isInput: true,
			id: "profile-phone",
			name: "phone",
			title: "Phone",
			type: "phone",
			value: "+7(909)9673030",
			placeholder: "Phone",
		},
	],
};

export default tpl(props);
