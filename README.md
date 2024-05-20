# JetStream - A news app project

For this project, I decided to display top articles on aviation using a NextJs app (as requested). If you click on the displayed articles, you may see that it opens a new dialog with additional information and a link to the NYT article. I also decided to take this a step further and add something a little special. I added a hamburger menu with different queries you can select to display different articles.

## Please read

- This was my first time using NextJs! I have been coding in React for 6.5 years and have never used Next, so please keep that in mind :)
- This was also my first time using Mantine (which I found awesome, btw). I found the setup a little confusing so I used a Mantine template for this project.

## Things I would have liked to add if I had unlimited time

Although the prompt said I had a week to do this project, I am currently working, so have limited time, so decided to do it mostly over a weekend. Therefore, these were the items I would have liked to add if I add unlimited time:

- more thorough testing (although I did add quite a few; I would have really liked to mock out a lot of things)
- a search bar feature
- a UI error state for if the data fetch fails
- pagination (and another fetch) to get more data and paginate through articles

## Set up instructions

- clone repo on to your machine
- go into repo's directory on your machine in terminal
- run `npm i`
- run `npm run dev` – to start dev server
- terminal will output what port to use, go to that port in browser to view page

## Testing scripts

- `npm run test components` – runs unit tests on components
