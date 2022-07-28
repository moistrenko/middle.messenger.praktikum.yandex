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
			id: "profile-oldPassword",
			name: "password",
			title: "Old password",
			type: "password",
			value: "123455",
			placeholder: "Old password",
		},
		{
			isInput: true,
			id: "profile-NewPassword",
			name: "password",
			title: "New password",
			type: "password",
			value: "123355",
			placeholder: "New password",
		},
		{
			isInput: true,
			id: "profile-repeatNewPassword",
			name: "password",
			title: "Repeat new password",
			type: "password",
			value: "123123123",
			placeholder: "Repeat new password",
		}
	],
};

export default tpl(props);
