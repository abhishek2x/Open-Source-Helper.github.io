import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper, Grid, Item, Content, Stats } from "./styles";
import { Button, Input } from 'components/common';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState("react");

  useEffect(() => {
    getRepos();
  }, [query]);

  const getRepos = async () => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}`
    );
    const data = await response.json();
    console.log(data);
    setRepos(data);
    return
  };

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <form onSubmit={getSearch} className="search-form">
        <Input
          className="search-bar"
          type="text"
          placeholder="Search for technology or Language"
          value={search}
          onChange={updateSearch}
        />
        <Button className="search-button" type="submit">
          Submit
        </Button>
      </form>

      <Grid>
        {repos.map(({ item }) => (
          <Item
            key={item.items.id}
            as="a"
            href={item.items.html_url}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{item.items.name}</h4>
                <p>{item.items.description}</p>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{item.items.forks_count}</span>
                </div>
              </Stats>
            </Card>

          </Item>
        ))}

      </Grid>
    </Wrapper>
  );
};
