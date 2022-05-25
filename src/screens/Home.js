import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import { FatText } from "../components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments
      createdAt
      isMine
    }
  }
`;

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  max-width: 615px;
  margin: 20px auto 20px auto;
`;

const PhotoHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const Username = styled(FatText)`
  margin-left: 15px;
`;

const PhotoFile = styled.img`
  width: 100%;
`;

const PhotoData = styled.div``;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  div {
    display: flex;
    align-items: center;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
`;

const Likes = styled.div`
  margin-left: 25px;
  margin-bottom: 20px;
  display: block;
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      {data?.seeFeed?.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoHeader>
            <Avatar lg url={photo.user.avatar} />
            <Username>{photo.user.username}</Username>
          </PhotoHeader>
          <PhotoFile src={photo.file} />
          <PhotoData>
            <PhotoActions>
              <div>
                <PhotoAction></PhotoAction>
                <FontAwesomeIcon size={"2x"} icon={faHeart} />
                <PhotoAction></PhotoAction>
                <FontAwesomeIcon size={"2x"} icon={faComment} />
                <PhotoAction></PhotoAction>
                <FontAwesomeIcon size={"2x"} icon={faPaperPlane} />
              </div>
              <div>
                <FontAwesomeIcon size={"2x"} icon={faBookmark} />
              </div>
            </PhotoActions>
            <Likes>
              {photo.likes === 1 || 0
                ? `${photo.likes} like`
                : `${photo.likes} likes`}{" "}
            </Likes>
          </PhotoData>
        </PhotoContainer>
      ))}
    </div>
  );
}
export default Home;
//const navigate = useNavigate();
//<h1>Home</h1>
//<button onClick={() => logUserOut(navigate)}>Log out now!</button>
