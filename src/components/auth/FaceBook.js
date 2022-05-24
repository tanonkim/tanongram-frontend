import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FFacebookLogin = styled.div`
  color: #385285;
  padding-top: 20px;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function FacebookLogin({ ctx }) {
  return (
    <FFacebookLogin>
      <FontAwesomeIcon icon={faFacebookSquare} />
      <span>{ctx}</span>
    </FFacebookLogin>
  );
}

export default FacebookLogin;
