import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about Open-source Helper</h1>
          <p>
            Open-Source Helper allows you to find a relevant project from
            which you can learn and contribute, just by searching a skill
            or keyword based on the your interest.
            <br/>
            We are providing a user-friendly website for users to Interact 
            with thousands of open source projects available on the web, allowing 
            them to select their ideal match with all filters to contribute on.
          </p>
          <Button as={AnchorLink} href="#projects">
            Explore Projects
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
