import Vue from "vue";
// import Main from "./layouts/Main";
import routes from "./routes";
const NotFound = { template: "<p>Страница не найдена</p>" };

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
});
