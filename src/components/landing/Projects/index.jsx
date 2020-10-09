import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper, Grid, Item, Content, Stats } from "./styles";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {/* {edges.map(({ node }) => ( */}
        <Item
          // key={node.id}
          as="a"
          // href={node.url}
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          <Card theme={theme}>
            <Content>
              <h4>Name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                dolorem rerum dolore, enim harum aut cum cupiditate? Provident,
                quae qui?
              </p>
            </Content>
            <Stats theme={theme}>
              <div>
                <Star color={theme === "light" ? "#000" : "#fff"} />
                <span>787</span>
              </div>
              <div>
                <Fork color={theme === "light" ? "#000" : "#fff"} />
                <span>87</span>
              </div>
            </Stats>
          </Card>
        </Item>
        {/* ))} */}
      </Grid>
    </Wrapper>
  );
};
