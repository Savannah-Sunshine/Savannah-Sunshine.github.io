import adapter from "@sveltejs/adapter-auto";
// Hopefully chooses @sveltejs/adapter-static for static site generation (SSG)
// but auto chooses what's best for your project. Hopefully

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/Savannah-Sunshine.github.io": "",
    },
  },
};

export default config;
