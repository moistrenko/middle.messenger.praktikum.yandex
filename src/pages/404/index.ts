import image_error from "../../assets/img/meme-404.png";
import tpl from "./tpl.hbs";
import "./index.sass";

const props = {
	image_error: image_error,
};

export default tpl(props);
