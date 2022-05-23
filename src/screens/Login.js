import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import ButtomBox from "../components/auth/ButtonBox";
import FacebookLogin from "../components/auth/FaceBook";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Seperator from "../components/auth/Seperator";
import routes from "../routes";

function Login() {
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </div>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log in" />
        </form>
        <Seperator />
        <FacebookLogin ctx="Login With FaceBook"></FacebookLogin>
      </FormBox>
      <ButtomBox
        ctx="Don't have an account?"
        link={routes.signUp}
        linkText="Sign Up"
      ></ButtomBox>
    </AuthLayout>
  );
}
export default Login;
