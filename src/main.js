import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";


createApp(App).use(router).mount("#app");
