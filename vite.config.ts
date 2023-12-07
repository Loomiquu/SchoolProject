import solid from "solid-start/vite";
import solidStatic from "solid-start-static";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/my-project/",
  // insert your github project name between slashes above
  plugins: [solid({ adapter: solidStatic() })],
});