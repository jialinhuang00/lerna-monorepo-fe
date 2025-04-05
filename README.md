# Lerna Monorepo Frontend Project

## Some Points

1. This is a monorepo project using Lerna.

2. It has four projects:
   - Two websites:
     - A React SPA (`spa-react-website`)
     - A Next.js site (`website`)
   - Two shared component libraries:
     - `pure-css-components`: Has basic CSS and Tailwind CSS
     - `storybook-components`: Uses Storybook to display components

3. **All packages are defined in the root `package.json` and the scripts specify the workspace, so you don't need to jump around in the terminal with `cd` commands - no more running back and forth between projects!**

The main goal is to create a boilerplate with consistent component styling that works across different domains (websites). I set up two example websites to test this approach, while also experimenting with [Storybook and Tailwind integration](#storybook-and-tailwind-integration) (which took a lot of time to figure out).


## Local Development

To get started with local development:

1. clone
2. cd
3. `nvm use` (if you're not in node 22)
4. `npm i`
5. `npm run dev`


## Issues 🚨🚨

1. Tailwind CSS works fine in Storybook during development, but when I use `storybook-components` in the website projects, the styles don't show up.
2. The `pure-css-components` library with basic CSS works when imported into websites. I also tried putting Tailwind CSS directly inside and exporting it to the websites, but that doesn't work either.
3. I tried using rollup to bundle `storybook-components` with mixed results:
   - The newer `@import "tailwindcss";` makes a complete `dist/index.css`, but causes build error.
   - The classic syntax (for Tailwind < 4.0) builds OK but makes an incomplete `dist/index.css` file:

        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

## Configuration Notes

1. Next.js only needs `postcss.config.mjs` and CSS imports
2. Vite only needs `vite.config.ts` and CSS imports
No need for extra Tailwind config files.

3. tsconfig path resolve is for making imports work correctly
4. Vite's resolve is for finding modules
You need both set up right for everything to work.

## Dependencies

- Common: tailwindcss
- Next.js: postcss, @tailwindcss/postcss
- Vite: @tailwindcss/vite


## Storybook and Tailwind Integration

After trying many different combinations, I found a helpful answer here:
https://stackoverflow.com/questions/65495912/storybook-tailwind-how-should-i-add-tailwind-to-storybook