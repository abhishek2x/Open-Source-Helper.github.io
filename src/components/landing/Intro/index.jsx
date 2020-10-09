import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/dev.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Open Source Helper</h1>
          <h4>Developed by Developers, for Developers!</h4>
          <Button as={AnchorLink} href="#contact">
            A Kickoff to Open source
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Developed by Developers, for Developers!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
