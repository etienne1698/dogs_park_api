import searchService from "./search.service.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

export default function SearchRoutes(app) {
  app.get("/search", authMiddleware, async (req, res) => {
    try {
      let result = await searchService.searchPark(req.query?.q);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
}
