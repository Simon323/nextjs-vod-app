# Next.js + Tailwind + Firebase = VOD App

## Tailwind

- [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3)
- [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs)

## Create from template

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

## Fix template

1. Create file `.babelrc`

   ```json
   {
     "presets": [
       [
         "next/babel",
         {
           "preset-react": {
             "runtime": "automatic",
             "importSource": "@emotion/react"
           }
         }
       ]
     ],
     "plugins": ["xwind/babel", "@emotion/babel-plugin"]
   }
   ```

2. In `next.config.js` add
   ```js
   module.exports = {
     //... other config options
     experimental: {
       forceSwcTransforms: true,
     },
   };
   ```

## Install MUI

```bash
# npm packages
- @mui/material
- @emotion/react
- @emotion/styled

# install
$ yarn add @mui/material @emotion/react @emotion/styled
```

## State manager

```bash
# npm packages
  - recoil

# install
$ yarn add recoil
```

## Player

```bash
# npm packages
  - react-player

# install
$ yarn add react-player
```

## Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)
