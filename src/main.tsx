import {Router} from "./router"
import { SignupPage } from "./pages/SignupPage";
import {HomePage} from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage";
import './styles/index.css';
import { Dashboard } from "./pages/Dashboard";

const router = new Router("app");
router.addRoute("/", HomePage);
router.addRoute("/home", HomePage);
router.addRoute("login", LoginPage);
router.addRoute("/signup", SignupPage);
router.addRoute("/Dashboard", Dashboard);

router.start();