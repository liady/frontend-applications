## React App "risico taxatie app"


### Index
1. [Installation](#installation)
2. [Tooling](#tooling)
3. [Design choices](#design-choices)
4. [resources](#resources)
5. [Acknowledgements](#Acknowledgements)
6. [Proces](#proces)
7. [Summary](#summary)

#### Installation
Open the terminal. Cd into the desired folder and `git clone` this repo.
`cd`  into the map and type `npm install`.
This will install all of the dependecies, stated in the `package.json`.

The initial installation is created with `create-react-ap`. This is a great way to get started with a react project. This way you are not required to install or configure tools like Webpack or Babel. The only requirement is that you need to have *Node >= 6* installed on your machine.
After that, you can type

```

npm init react-app my-app

```

This will create a directory inside the current folder. Webpack and Babel come pre-configured. Just type

```

npm start

```
and see your new react app on Localhost:3000

#### tooling

The create-react-app setup comes preconfigured with Webpack and Babel.

- **Webpack** is a module bundler for javascript applications. This tool adds support for ES6 modules. Using `Import` and `Export` in your components.
- **Babel** Javascript Compiler. Mainly used to convert modern javascript code into Javascript that is backward compatible for older browsers.
- **JSX support** JSX is a html syntax used for React. It is really powerful in combination with the use of `props` and `this` and it lets you use the components in almost the same syntax as html.
- **Autoprefixed CSS** It prefixes the css for you. So you don't have to write it yourself or use `-webkit-`.
- **a live development server** with 'hot' reload.

#### Design choices

My concept for the Risico Taxatie app is not visible in my code. I would need more time to properly code my concept. But, this Repo reflects my learning curve for React.

The user is an employee of Jeugdhulp Amsterdam who needs to add Persons to his/her file. The application then provides a dashboard view and makes it possible to enter the answers needed to make a 'risico taxatie'. My concept focuses on a user that is not tech-savy. Also, the user doesn't see technology as an advancement in his field of work.

To minimize the learning curve for employees of Jeugdhulp Amsterdam, I want to introduce the idea of a 'wizard' that guides the user through the risico taxatie app. The wizards explains the workings of the app so it reduces the fear of the users of getting started with a 'new technology'.

Also, I restructured the JSON file so I can present the questions to the user in progressive disclosure to reduce cognitive load. The questions are then later divided into category's.

#### Resources

- [React documentation](https://reactjs.org/docs/getting-started.html)
- [The net ninja](https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG)
- [Traversy media React crash course](https://www.youtube.com/watch?v=A71aqufiNtQ)

#### Acknowledgements

Thanks to my classmates that help me with some coding problems.
- Dennis wegereef
- Gijs Laarman
- Jim van de Ven

#### Proces

In the first two days of this two week assignment I scanned the documentation of the react site. I also watched some React youtube tutorials, just to get a little understanding of this framework.

In day three I started building and exploring some basis concepts of React. I had to get used to the idea of a 'Virtual DOM'. Also, I found it difficult to pass states and props in the virtual dom. By day 5, this first project was a total mess. So I decided to start all over again. Luckily I discovered Create-my-react-app to get me started a lot quicker.

After that my build went a lot faster. I experimented with passing data and props in this virtual Dom. One thing I am proud of is Routing in my React app.

`App.jss` contains a persons object in the state. This state then gets parsed into the render function. In this render function, `const persons` is fired to map all of the persons into an array and returns a list of persons. The array is then parsed to the `Person.js` component that renders a div. The person component is then called in the `app.js` file. There, it renders a list of `Person` components into the dom.
This list is rendered between `BrowserRouter` tags. So Routing works in my application. Every Person has its own ID. The rendered person url is equal to the Person's ID.

In the last week I ran into a lot of problems in my routing and I've found it difficult to parse json data into my app.
Eventually I succeed in parsing the questions and options in my component.


#### Summary   

I did not have enough time to think about my Proces alot. My time was mostly spent struggeling with React. Eiterway, React is a powerful language and I would like to spent more time learning this. It was great fun! The syntax, virtual dom and rendering of React is not that difficult if you get the hang of it. My lack of Javascript understanding is standing in the way of my personal development. So I have to spend more time getting the basics of javascript down.  
