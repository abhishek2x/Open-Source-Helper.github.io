import React, { useState, useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/dev.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";
import { auth, providerGoogle, providerGitHub } from '../../../firebase_config.js'

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const [user, setUser] = useState(null)

  const signInGoogle = () => {
    auth
      .signInWithPopup(providerGoogle)
      .then((result) => {
        console.log(result.additionalUserInfo.profile.name)
        setUser(result.additionalUserInfo.profile.name)
      })
      .catch((error) => alert(error.message))
  }
  const signInGitHub = () => {
    auth
      .signInWithPopup(providerGitHub)
      .then((result) => {
        console.log(result.additionalUserInfo.username)
        setUser(result.additionalUserInfo.username)
      })
      .catch((error) => alert(error.message))
  }
  const signOut = () => {
    auth
      .signOut()
      .then(() => setUser(null))
      .catch((error) => alert(error.message))
  }

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Open Source Helper</h1>
          <h4>Developed by Developers, for Developers!</h4>


          {!user ?
            (
              <>
                <Button onClick={signInGoogle}>
                  Sign in with Google
                  {/* <img width="24" src="/icons/google.svg"/> */}
              </Button>
                <br />
                <br />
                <Button onClick={signInGitHub}>
                  Sign in with Github 
                  {/* <img width="24" src="/icons/github.svg"/> */}
                </Button>
              </>
            ) :
            (
              <>
                <h5>Welcome {user}</h5>
                <Button onClick={signOut}>
                  Sign out
              </Button>
              </>
            )}

        </Details>
        <Thumbnail>
          <img src={dev} alt="Developed by Developers, for Developers!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
}