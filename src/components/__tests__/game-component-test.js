import React from "react";
import { shallow } from "enzyme";

import Game from "../game";

describe("<Game />", () => {
  it("Can start a game", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [20, 54, 33, 95, 75],
      feedback: `You're Hot!`,
      correctAnswer: 70
    });
    wrapper.instance().restartGame();
    expect(wrapper.state("guesses")).toEqual([]);
    expect(wrapper.state("feedback")).toEqual("Make your guess!");
    expect(wrapper.state("correctAnswer")).toBeGreaterThanOrEqual(0);
    expect(wrapper.state("correctAnswer")).toBeLessThanOrEqual(100);
  });
  it("Can make guesses", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 100
    });

    wrapper.instance().makeGuess(25);
    expect(wrapper.state("guesses")).toEqual([25]);
    expect(wrapper.state("feedback")).toEqual("You're Ice Cold...");

    wrapper.instance().makeGuess(60);
    expect(wrapper.state("guesses")).toEqual([25, 60]);
    expect(wrapper.state("feedback")).toEqual("You're Cold...");

    wrapper.instance().makeGuess(80);
    expect(wrapper.state("guesses")).toEqual([25, 60, 80]);
    expect(wrapper.state("feedback")).toEqual("You're Warm.");

    wrapper.instance().makeGuess(95);
    expect(wrapper.state("guesses")).toEqual([25, 60, 80, 95]);
    expect(wrapper.state("feedback")).toEqual("You're Hot!");

    wrapper.instance().makeGuess(100);
    expect(wrapper.state("guesses")).toEqual([25, 60, 80, 95, 100]);
    expect(wrapper.state("feedback")).toEqual("You got it!");
  });
});
