// import express from "express"
// import { renderToString } from "react-dom/server"
// import { StaticRouter, matchPath } from "react-router-dom"
// import { matchRoutes, renderRoutes } from "react-router-config"
// import { Provider } from "react-redux"
// import React from "react"
// import serialize from "serialize-javascript"
// import store from "../shared/redux/store"
// import Routes from "../shared/Routes"
// import stats from "../dist/client/stats.json"
// import App from "../shared/App"
// import "@babel/polyfill"

// const app = express()

// const PORT = 5000
// app.use(express.static("dist/client"))

// // app.get("/", (req, res) => {
// //   res.json({ data: "Works! )))" })
// // })

// const render = (req, store, context) => {
//   const markup = renderToString(
//     <Provider store={store}>
//       <StaticRouter location={req.path} context={context}>
//         <div>{renderRoutes(Routes)}</div>
//       </StaticRouter>
//     </Provider>
//   )

//   // const markup = renderToString(<App />)

//   return `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>SSR React Redux</title>
//     <link rel="stylesheet" href="/${stats.assetsByChunkName.main[0]}"/>
//   </head>
//   <body>
//     <div id="root">${markup}</div>
//     <script>window.__INIT_STATE__ = ${serialize(store.getState()).replace(
//       /</g,
//       "\\u003c"
//     )}</script>
//     <script src="/${stats.assetsByChunkName.main[1]}" defer></script>
//   </body>
//   </html>`
// }

// app.get("*", async (req, res) => {
//   try {
//     // const currentRoute =
//     //   Routes[0].routes.find((route) => matchPath(req.url, route)) || {}
//     // console.log({ currentRoute })
//     // const data = currentRoute.fetchData && (await currentRoute.fetchData(store))
//     // const context = { data }

//     // const content = render(req, store, context)
//     // res.send(content)

//     //////////////////////////////////

//     const param = req.params[0].split("/")
//     const id = param[2]

//     const routes = matchRoutes(Routes, req.path)

//     const promises = routes
//       .map(({ route }) => {
//         return route.fetchData ? route.fetchData(store, id) : null
//       })
//       .map((promise) => {
//         if (promise) {
//           return new Promise((resolve, reject) => {
//             promise.then(resolve).catch(resolve)
//           })
//         }
//         return null
//       })

//     Promise.all(promises).then((data) => {
//       const context = { data }
//       const content = render(req, store, context)

//       if (context.notFound) {
//         res.status(404)
//       }

//       res.send(content)
//     })
//   } catch (error) {
//     console.log(`Server error: ${JSON.stringify(error)}`)
//   }
// })

// app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))

import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { matchRoutes, renderRoutes } from "react-router-config"
import express from "express"
import { Provider } from "react-redux"
import serialize from "serialize-javascript"
import Routes from "../shared/Routes"
import store from "../shared/redux/store"
import stats from "../dist/client/stats.json"

const app = express()
const PORT = 4000
app.use(express.static("dist/client"))

const renderer = (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" type="text/css" href="/${
        stats.assetsByChunkName.main[0]
      }" />
      <title>Document</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
      window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
        /</g,
        "\\u003c"
      )}
      </script>
      <script src="/${stats.assetsByChunkName.main[1]}"></script>
    </body>
  </html>`
}

app.get("*", (req, res) => {
  const params = req.params[0].split("/").pop()

  const routes = matchRoutes(Routes, req.path)

  const promises = routes
    .map(({ route }) => {
      return route.fetchData ? route.fetchData(store, params) : null
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve)
        })
      }
      return null
    })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if (context.notFound) {
      res.status(404)
    }

    res.send(content)
  })
})

app.listen(PORT, () => {
  console.log("Server on port ", PORT)
})
