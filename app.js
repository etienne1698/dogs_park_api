import express from 'express'
import AuthRoutes from './api/auth/auth.routes.js'
import SearchRoutes from './api/search/search.routes.js';

const app = express()

app.use(express.json());

AuthRoutes(app);
SearchRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
