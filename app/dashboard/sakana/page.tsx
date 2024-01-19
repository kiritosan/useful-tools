"use client";

import React, { useEffect } from "react";
import "sakana-widget/lib/index.css";
import SakanaWidget from "sakana-widget";

const takina = SakanaWidget.getCharacter("takina");
takina.initialState = {
  ...takina.initialState,
  i: 0.001,
  d: 1,
};
SakanaWidget.registerCharacter("takina-slow", takina);

const github = SakanaWidget.getCharacter("chisato");
github.image = `https://raw.githubusercontent.com/dsrkafuu/sakana-widget/main/docs/github.png`;
SakanaWidget.registerCharacter("github", github);
console.log("🚀 ~ github:", github);

const SakanaWidgetElement = () => {
  useEffect(() => {
    new SakanaWidget().setState({ i: 0.001, d: 1 }).mount("#sakana-widget");
    new SakanaWidget({ character: "takina-slow" }).mount(
      "#sakana-widget-takina",
    );
    new SakanaWidget({ character: "github" }).mount("#sakana-widget-custom");
  }, []);

  return (
    <div>
      <div id="sakana-widget" className="fixed left-0 bottom-2"></div>
      <div id="sakana-widget-takina" className="fixed left-40 bottom-2"></div>
      <div id="sakana-widget-custom" className="fixed left-80 bottom-2"></div>
    </div>
  );
};

export default SakanaWidgetElement;
