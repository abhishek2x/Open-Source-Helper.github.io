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
  const [repos2, setRepos2] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState("react");

  useEffect(() => {
    getRepos();
  }, [query]);

  const getRepos = async () => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}`
    );
    const response2 = await fetch(
      `https://gitlab.com/api/v4/search?scope=projects&search=${query}`, {
      headers: {
        "Private-Token": "glpat-3TU_asKzw9FN7LqKxqyx"
      }
    })
    const data = await response.json();
    const data2 = await response2.json();
    // console.log(data.items);
    // console.log(data2);
    setRepos(data.items);
    setRepos2(data2);
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
        {repos && repos.map((item) => (
          <Item
            key={item.id}
            as="a"
            href={item.html_url}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{item.forks_count}</span>
                </div>
              </Stats>
            </Card>

          </Item>
        ))}

        {repos2 && repos2.map((item) => (
          <Item
            key={item.id}
            as="a"
            href={item.http_url_to_repo}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{item.forks_count}</span>
                </div>
              </Stats>
            </Card>

          </Item>
        ))}

      </Grid>
    </Wrapper>
  );
};
