import {Router} from "./router"
import { SignupPage } from "./pages/SignupPage";
import {HomePage} from "./pages/HomePage"
import './styles/index.css';
const router = new Router("app");

router.addRoute("/", HomePage);
router.addRoute("/home", HomePage);

router.addRoute("/signup", SignupPage);

router.start();