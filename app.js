import express from 'express'
import AuthRoutes from './modules/auth/auth.routes.js'
import SearchRoutes from './modules/search/search.routes.js';

const app = express()

app.use(express.json());

AuthRoutes(app);
SearchRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
