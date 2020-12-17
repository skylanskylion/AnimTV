import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Main = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  width: 100%;
  margin: 0;
`;
const Wrap = styled.div`
  display: flex;
  height: auto;
  margin: auto;
  flex-direction: row;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  justify-content: center;
  border-radius: 25px;

  background-image: radial-gradient(
    circle at center bottom,
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 6%,
    rgb(0, 0, 0) 6%,
    rgb(0, 0, 0) 27%,
    rgb(0, 0, 0) 27%,
    rgb(0, 0, 0) 42%,
    rgb(0, 0, 0) 42%,
    rgb(0, 0, 0) 63%,
    rgb(0, 0, 0) 63%,
    rgb(0, 0, 0) 64%,
    rgb(0, 0, 0) 64%,
    rgb(0, 0, 0) 71%,
    rgb(0, 0, 0) 71%,
    rgb(0, 0, 0) 100%
  );

  width: 80%;
`;

const L = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: white;
  margin: 1%;
  border-radius: 5px;
  padding: 8px;
  &:hover {
    background: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};
    transition: all 300ms;
  }
`;

const Warning = styled.div`
  display: flex;
  height: auto;
  margin: 18px auto;
  flex-direction: row;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  justify-content: center;
  border-radius: 25px;

  background-image: radial-gradient(
    circle at center top,
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 6%,
    rgb(0, 0, 0) 6%,
    rgb(0, 0, 0) 27%,
    rgb(0, 0, 0) 27%,
    rgb(0, 0, 0) 42%,
    rgb(0, 0, 0) 42%,
    rgb(0, 0, 0) 63%,
    rgb(0, 0, 0) 63%,
    rgb(0, 0, 0) 64%,
    rgb(0, 0, 0) 64%,
    rgb(0, 0, 0) 71%,
    rgb(0, 0, 0) 71%,
    rgb(0, 0, 0) 100%
  );

  width: 80%;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: 100%;
    flex-direction: column;
    width: 95%;
  }
  @media ${(props) => props.theme.mediaQueries.small} {
    margin: 45px auto;
    height: 100%;
    flex-direction: column;
    width: 90%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Summary = styled.div`
  overflow: hidden;
  background-size: cover;

  background-attachment: fixed;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);

  background-image: linear-gradient(
    135deg,
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 1%,
    rgb(0, 0, 0) 1%,
    rgb(0, 0, 0) 53%,
    rgb(0, 0, 0) 53%,
    rgb(0, 0, 0) 57%,
    rgb(0, 0, 0) 57%,
    rgb(0, 0, 0) 69%,
    rgb(0, 0, 0) 69%,
    rgb(0, 0, 0) 75%,
    rgb(0, 0, 0) 75%,
    rgb(0, 0, 0) 100%
  );
`;
const Heading = styled.h1`
  color: white;
  padding-bottom: 10px;
`;
const Synopsis = styled.div`
  display: flex;
  width: 90%;
  padding: 2%;
  flex-direction: column;
  border-radius: 0.8rem;
`;

const Git = styled.a`
  text-decoration: none;
  color: white;
  margin: 30px;

  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    transform: scale(1.1);
    ::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 20px;
  left: -60px;
  background-color: #000,
  box-shadow: 0rem 2rem 5rem #282c34;
  transition: all 300ms ease;
  @media ${(props) => props.theme.mediaQueries.large} {
    transform: scale(1.03);
    left: -40px;
    transform: translate(40px, -30px);
  }
  @media ${(props) => props.theme.mediaQueries.small} {
    width: 200px;
    left: -30px;
    height: 235px;
    transform: translate(30px, -20px);
  }
`;

const H2 = styled.h2`
  color: white;
  text-align: left;
  margin-bottom: 2%;
`;
const P = styled.p`
  text-align: left;
`;

const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 4px auto;

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin: auto;
    align-items: flex-start;
  }
`;

const Home = () => {
  const [genre, setgenre] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(`https://anime-x.vercel.app/api/genrelist`)
      .then((res) => res.json())
      .then((doc) => {
        setgenre(doc.list);
        setloading(false);
      });
  });

  return loading ? (
    <Loading />
  ) : (
    <Main>
      <Heading>Genres</Heading>
      <Wrap>
        <Div>
          {genre.map((ele, index) => {
            return (
              <L to={`/genre/${ele.split(" ").join("-")}/1`} key={index}>
                {ele}
              </L>
            );
          })}
        </Div>
      </Wrap>

      <Warning>
        <Img src={process.env.PUBLIC_URL + "/naruto.png"} alt="" />
        <Synopsis>
          <Heading>AnimTV</Heading>
          <Summary>
            <div
              style={{
                backdropFilter: "blur(6px)",
                color: "white",
                display: "inline-block",
                height: "100%",
                width: "100%",
                padding: "5%",
              }}
            >
              <H2>Weeb Quote of the Day</H2>
              <P>
                "Do Exactly as you like. That is the true meaning of pleasure.
                Pleasure leads to joy and joy leads to happiness." ~ Gilgamesh ~
              </P>
            </div>
          </Summary>
        </Synopsis>
      </Warning>

      <Maindiv>
        <Git href="https://github.com/No-Cellist-7780">
          <AiFillGithub
            style={{ position: "relative", top: "10px" }}
            size="2.5em"
          />
          No-Cellist-7780
        </Git>
      </Maindiv>
    </Main>
  );
};
export default Home;
