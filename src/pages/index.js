import React from "react";
import Link from "gatsby-link";
import styled, { css } from "react-emotion";
import { queries } from "../helpers/MediaQueries";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <Wrapper>
        {data.allTweet.edges.map(({ node }, index) => (
          <TwitterPost key={index}>
            {node.entities.media &&
            node.entities.media[0].media_url.length > 0 ? (
              <img src={node.entities.media[0].media_url} />
            ) : (
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAZlBMVEXY2NhAQEDb29s6Ojrg4OA9PT02NjYzMzO+vr5GRkYtLS11dXXQ0NDV1dVBQUGbm5t/f3+SkpKqqqqzs7PJyclaWlpfX1+kpKTDw8NTU1OOjo5vb29NTU1gYGBpaWl8fHyHh4ceHh7lf7HuAAAENUlEQVR4nO3da3OiMBQGYDwhCVJQuUnB6/7/P7m6dtucgCU6O8VN3udznYF3cjmJiY0iAAAAAAAAAAAAAAAAAHhp9GXuR3k9RHEc1Unbrq/aMqkpRlBfiPKk3OyXKymEuhJisVp25zLJY6R0ccnnfJBaSLkwSSn06rBJ8uBDImoPl3gW46RID+so6JAoKqS+l89HSiotsnBDoqpT3+Zzo7o20JZE0Vl+34K+WtIuyIZEdePShG7EsornfuAfR9VSOCd0HbiL0DK6JOTWyT6pYu5n/lmUjA5Dt9pRjBcBughpPKJ6NUjhUirq5nQuiqLfbMVYraTXAfW1bGuPQ1LtT1WWf6xk8yw5dWoYUhlMO6KzPZeJ/bpmq1airO0GOa7qQDKiynp3mW5G6h6Kershid0MjzsHsiazu0VP/G6XTnodRDOiteYJNe/33puyHW9wsguiq2V76fzWlFsZqT6AWc1qRFLebUN//trOaJH92JPOJmt4I2q/7zmUdezvhf8FJJVsBBZvU29MCfuAbLyPKH5jHef7bnb7BK+i0ulP/OeyFWtEZ4f3zdn4rnzvaVSyRqRc5nBam83I+/KRNmZE4s1lCqfabEay8XxOIzY/Sbd1KbGJX/hdPVKdmgntc7dPtWZP05XfEZVm3ShObqUyvZuf0n5viVAvnnnZjE1pni9lzapILl1LnNwcwTyPKDuYER3chqJLRE1AER33S6HUbWN6evHxV0gRXValSdkWp06nWqfOdTLvaH4P19HtKFocx1RXfeIcERvk/Z70DQ8c16PEnPSV9+vYJ7BFmuw8X4A852h0NLFznQcDQom5gSJ69LMBvjugnQf5cFDCNgeWcz/PC+L7JwFs7z9uw7aug/la3x3flV2ITQBfNT4mLvm3bs6bA8Ggih8OCeoUlhOq+Hk/cUTZyFFlnffT6GZc3FoHHlWLbsZQYZ2/Ui5f3Qalt07NqDcMRAxtrDYktriaZqLoaCfUBHlT5i7KdoM2hIWHaSSh+0dGg0TRwU5ojzZkosH1B7XFOMQMepk6og0xdBokhDbExL2dkNNJtoBQpa2EznM/0ovhxxqvCfVzP9KrsZcdGl+aWeybagKbjDZqQrvv8Sj73Dr2hwbowL5UPKKX2Shhh7JxSGaIzuyQvvfn9Z6Qbc2rHse5H+cF8bt5aTAnGh/Aj+s12Msfik/mcT2U1SNY3ShwFm1EbR61EnM/zSuid+N3MmSHsnGIKrMocrypFha2ysdoPYZdePT9ttBz2AVYzy93PolVjgK19QheXCOiESyiFSrHEewnaZaIaASVv9JPChGNIvx7AgAAAACAfyHmUF4P8B8NlVjGDiGiSdZPzyKiIUQ0CRFNQkSTENEkRDQJEU1CRJMQ0SRENAkLkEnxLtUGHHUcgc0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAeFG/Ac8RKbGk+g+fAAAAAElFTkSuQmCC" />
            )}
            <Title>{node.full_text}</Title>
            {node.entities.hashtags[0] && (
              <p>{node.entities.hashtags[0].text}</p>
            )}
            {node.entities.hashtags[1] && (
              <p>{node.entities.hashtags[1].text}</p>
            )}
            {node.entities.hashtags[2] && (
              <p>{node.entities.hashtags[2].text}</p>
            )}
            {node.entities.hashtags[3] && (
              <p>{node.entities.hashtags[3].text}</p>
            )}
          </TwitterPost>
        ))}
      </Wrapper>
    </div>
  );
};

export const Hashtag = ({ hashtagInfo }) => {
  console.log("hashtaginfo:", hashtagInfo);
  <p>hi</p>;
};

export const query = graphql`
  query PageQuery {
    allTweet {
      edges {
        node {
          full_text
          entities {
            media {
              media_url
              type
            }
            hashtags {
              text
            }
          }
        }
      }
    }
  }
`;

const Hashtags = styled("div")`
  display: ${props => (props.hashtagText.length > 0 ? "flex" : "none")};
`;

const Title = styled("h4")`
  margin-bottom: 0;
`;

const TwitterPost = styled("div")`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 30px;
  height: auto;
`;

const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: dense;

  /* // @media (max-width: 960px) {
  //   grid-template-columns: repeat(2, 1fr);
  // }

  // @media (max-width: 530px) {
  //   grid-template-columns: repeat(1, 1fr);
  // } */
`;
