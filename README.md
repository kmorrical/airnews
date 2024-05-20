# JetStream - A news app project

For this project, I decided to display top articles on aviation using a NextJs app (as requested). If you click on the displayed articles, you may see that it opens a new dialog with additional information and a link to the NYT article. I also decided to take this a step further and add something a little special. I added a hamburger menu with different queries you can select to display different articles.

## Special Notes!

- This was my first time using NextJs! I have been coding in React for 6.5 years and have never used Next, so please keep that in mind :)
- This was also my first time using Mantine (which I found awesome, btw). I found the setup a little confusing so I used a Mantine template for this project.

## Things I would have liked to add if I had unlimited time

- more thorough testing (although I did add quite a few)
- a search bar feature
- a UI error state for if the data fetch fails
- pagination (and another fetch) to get more data and paginate through articles

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `npm run test components` – runs unit tests on components

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
