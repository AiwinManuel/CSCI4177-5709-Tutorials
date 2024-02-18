# Tutorial 3


* *Date Created*: 05 FEB 2024
* *Last Modification Date*: 05 FEB 2024
* *T3 Lab URL*: https://git.cs.dal.ca/acmanuel/csci4177-5709-tutorials
* *T3 Git URL*: https://github.com/AiwinManuel/CSCI4177-5709-Tutorials
* *T3 Production domain*: https://main--elaborate-croissant-59c494.netlify.app/register




## Authors


* [Aiwin Charalil Manuel](aw380590@dal.ca) - *(Owner)*



## Built With

* [React.Js](https://react.dev/learn) - The  Framework used
* [JavaScript](https://www.javascript.com/learn/strings) - The Backend used




## Sources Used



## Artificial Intelligence Tools Used
If in completing your lab / assignment / project you used any Artificial Intelligence Tools or Plugins, then provide a list of the tools or plugins used, the prompt used, the code generated by the AI, where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

* [Chat-GPT](https://chat.openai.com/) - The AI Tool used



### Prompt Used on *Chat-GPT*

```
i deployed my application in netlify but when accessing the other page   its showing 404 page not found , why

```

```
When you deploy a React application that uses client-side routing (e.g., with react-router-dom) to Netlify, you might encounter 404 errors when directly accessing URLs other than the root. This issue occurs because Netlify, by default, serves static files and does not know how to handle the client-side routes defined in your React app.

In a single-page application (SPA) like those built with React, the routing is handled by JavaScript in the browser. When a user navigates to a route directly (or refreshes the page), the server must be configured to always serve the same index.html file, and then the JavaScript from your React app takes over to render the appropriate view based on the URL.

How to Fix
To fix the 404 error for client-side routes on Netlify, you need to create a _redirects file in the public directory of your React app with the following content:

bash
/*    /index.html   200
This configuration tells Netlify to redirect all requests to your index.html file, allowing your React app to handle the routing.
```
