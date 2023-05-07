import { useAppContext } from "../appContext";
import styled from "styled-components";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Icons
import { Icon } from "@iconify/react";
import { ReactComponent as UD } from "../images/ud.svg";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }

  .img {
    width: 18rem;
    height: 18rem;
  }

  .crypto {
    height: 10rem;
    margin: 2.5rem 0;

    a {
      display: flex;
      align-items: center;
      height: 4.25rem;
      margin: 1rem 1rem;
      background: ${({ theme }) => (theme.name === "light" ? "" : "#515151")};

      &:hover {
        background: ${({ theme }) =>
          theme.name === "light" ? "black" : "white"};
      }
    }
  }
`;

export default function AboutMe() {
  const { theme } = useAppContext();

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>I am a JavaScript Developer.</p>
                {moreInfo && <p>{moreInfo}</p>}
                <p>
                  Checkout the GitHub template I created to build this
                  performant, accessible, progressive web application here.{" "}
                  {<Icon icon="material-symbols:arrow-drop-down" />} <br />
                  <a href="https://github.com/mshuber1981/github-react-portfolio-template">
                    mshuber1981/github-react-portfolio-template
                  </a>
                </p>
              </Container>
            </Col>
            <Col className="d-none d-sm-block text-center">
              <img
                src="https://avatars1.githubusercontent.com/u/55626560?s=460&u=bbb9b547a6e0c4856997702307c52c6598c72f93&v=4"
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
          <Container className="crypto d-flex flex-wrap w-100 justify-content-center align-items-center">
            <Button
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
              href="https://ud.me/mikeyhuber.crypto"
              aria-label="Unstoppable Domains Profile"
            >
              <div>
                <UD /> <Icon icon="logos:bitcoin" />{" "}
                <Icon icon="logos:ethereum-color" />
              </div>
            </Button>
            <Button
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
              href="https://handle.me/mikeyhuber"
              aria-label="ADA Handle"
            >
              <div>
                <Icon icon="fluent-emoji-flat:heavy-dollar-sign" /> ADA Handle{" "}
                <Icon icon="logos:cardano-icon" />
              </div>
            </Button>
            <Button
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
              href="https://www.jpg.store/MikeyHuber"
              aria-label="jpg store profile"
            >
              <div>
                <Icon icon="bi:filetype-jpg" /> jpg.store{" "}
                <Icon icon="logos:cardano-icon" />
              </div>
            </Button>
          </Container>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
