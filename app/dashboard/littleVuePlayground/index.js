import Vue from "../../../lib/smallVue/main";

const options = {
  el: "#app",
  data: {
    msg: "hello vue",
  },
};

const vue = new Vue(options);
console.log("🚀 ~ file: index.js:11 ~ vue:", vue);
