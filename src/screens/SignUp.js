import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import ButtomBox from "../components/auth/ButtonBox";
import FacebookLogin from "../components/auth/FaceBook";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Seperator from "../components/auth/Seperator";
import { FatLink } from "../components/shared";
import routes from "../routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

function SignUp() {
  return (
    <AuthLayout>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="4x" />
          <Subtitle>
            Sign Up to see photos and videos from your friends
          </Subtitle>
          <FacebookLogin ctx="Sign up With FaceBook"></FacebookLogin>
          <Seperator />
        </HeaderContainer>
        <form>
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Sign up" />
        </form>
      </FormBox>
      <ButtomBox
        ctx="Have an account?"
        link={routes.home}
        linkText="Sign up"
      ></ButtomBox>
    </AuthLayout>
  );
}
export default SignUp;
