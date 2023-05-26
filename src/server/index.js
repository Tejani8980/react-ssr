import express from 'express'
import cors from 'cors'
import * as React from 'react'
import ReactDOM from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server';
import serialize from 'serialize-javascript'
import { Helmet } from "react-helmet";
import App from '../shared/App'
import routes from '../shared/routes'
import { getAllBlogData } from '../shared/api';

const app = express()

app.use(cors())
app.use(express.static("dist"))

app.get("*", (req, res, next) => {
  const promise = getAllBlogData();

  promise
    .then((data) => {
      const markup = ReactDOM.renderToString(
        <StaticRouter location={req.url}>
          <App apiData={data} />
        </StaticRouter>
      );
      const helmet = Helmet.renderStatic();
      const metaTags = helmet.meta.toString();
      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>React App</title>
          ${metaTags}
          <script src="/bundle.js" defer></script>
          <link href="/main.css" rel="stylesheet">
          <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
  }).catch(next)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})