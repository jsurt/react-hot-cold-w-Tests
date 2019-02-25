import React from "react";
import { shallow } from "enzyme";

import AuralStatus from "../aural-status";
import Feedback from "../feedback";
import Game from "../game";
import GuessCount from "../guess-count";
import GuessForm from "../guess-form";
//import GuessList from "../guess-list";
import GuessSection from "../guess-section";
import Header from "../header";
import InfoSection from "../info-section";
//import StatusSection from "../status-section";
import TopNav from "../top-nav";

describe("Smoke test for all components", () => {
  it("<AuralStatus /> renders without crashing", () => {
    shallow(<AuralStatus />);
  });
  it("<Feedback /> renders without crashing", () => {
    shallow(<Feedback />);
  });
  it("<Game /> renders without crashing", () => {
    shallow(<Game />);
  });
  it("<GuessCount /> renders without crashing", () => {
    shallow(<GuessCount />);
  });
  it("<GuessForm /> renders without crashing", () => {
    shallow(<GuessForm />);
  });
  //it("<GuessList /> renders without crashing", () => {
  //shallow(<GuessList />);
  //});
  it("<GuessSection /> renders without crashing", () => {
    shallow(<GuessSection />);
  });
  it("<Header /> renders without crashing", () => {
    shallow(<Header />);
  });
  it("<InfoSection /> renders without crashing", () => {
    shallow(<InfoSection />);
  });
  //it("<StatusSection /> renders without crashing", () => {
  //shallow(<StatusSection />);
  //});
  it("<TopNav /> renders without crashing", () => {
    shallow(<TopNav />);
  });
});
