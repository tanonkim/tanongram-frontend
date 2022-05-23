import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";

const SBottomBox = styled(BaseBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    font-weight: 600;
    margin-left: 5px;
    color: ${(props) => props.theme.accent};
  }
`;
function ButtomBox({ ctx, link, linkText }) {
  return (
    <SBottomBox>
      <span>{ctx}</span>
      <Link to={link}>{linkText}</Link>
    </SBottomBox>
  );
}

export default ButtomBox;
