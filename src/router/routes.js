import Home from "@/views/Home.vue";
import Command from "@/views/Command/Index.vue";
import Division from "@/views/Division/Index.vue";

const HOME = "/";
const COMMAND = "/command";
const DIVISION = "/division";

export default [
  {
    path: HOME,
    name: "Home",
    component: Home
  },
  {
    path: COMMAND,
    name: "Command",
    component: Command
  },
  {
    path: DIVISION,
    name: "Division",
    component: Division
  }
];
