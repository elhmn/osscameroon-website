import React from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

import intl from "../../utils/i18n";
import { Layout } from "../../components/layout/layout";
import { Tweet, Project } from "../../components/common";

import { TWEETS, PROJECTS } from "../../fixtures";

const { useTranslation } = intl;

export const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout title={t("title:home")}>
      <div className="home-page">
        <section id="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Lorem ipsum dolor sit amet, consectetur adipscing elit.</h1>
                <p>
                  <Button color="primary" outline>
                    {" "}
                    COMMUNITY PROJECTS{" "}
                  </Button>
                </p>
              </div>
              <div className="col-md-6 text-right">
                <img alt="developer illustration" className="d-none d-md-block" src="/static/img/developer.svg" style={{ marginTop: "30px" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="item-center" id="search">
          <div className="text-center">
            <h2>Looking for experienced developers ?</h2>
            <form className="search-form">
              <div>
                <InputGroup>
                  <Input className="search-input" placeholder="ex: Full Stack Web Developer" />
                  <InputGroupAddon addonType="append">
                    <Button className="search-button">
                      <img alt="search button" src="/static/icons/search.svg" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </form>
            {/*
            <a href="#">
              <img alt="circle down arrow" src="/static/icons/circle-down-arrow.svg" /> <br />
              Advenced search
            </a>
            */}
          </div>
        </section>

        <section className="item-center" id="projects">
          <div className="text-center">
            <h2> TOP PROJECTS </h2>
            <div className="container">
              <div className="row" style={{ margin: "40px 0 40px 0" }}>
                {PROJECTS.map((project, i) => (
                  <div className="col-md-4" key={i} style={{ margin: "20px 0 20px 0" }}>
                    <Project
                      description={project.description}
                      language={project.language}
                      name={project.name}
                      stars={project.stars}
                      type="small"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button color="primary">VIEW MORE PROJECTS</Button>
          </div>
        </section>

        <section className="item-center" id="tweets">
          <div className="text-center">
            <h2> TOP TWEETS </h2>
            <div className="container">
              <div className="row" style={{ margin: "40px 0 40px 0" }}>
                {TWEETS.map((tweet, i) => (
                  <div className="col-md-4" key={i} style={{ margin: "20px 0 20px 0" }}>
                    <Tweet
                      avatar={tweet.avatar}
                      comments={tweet.comments}
                      likes={tweet.likes}
                      name={tweet.name}
                      retweets={tweet.retweets}
                      text={tweet.text}
                      username={tweet.username}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button color="primary"> VIEW MORE TWEETS </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default Home;
