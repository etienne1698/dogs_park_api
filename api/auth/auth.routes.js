import authService from "./auth.service.js";

export default function AuthRoutes(app) {
  app.post("/auth/login", async (req, res) => {
    try {
      let result = await authService.login(req.body?.email, req.body?.password);
      if (!result) {
        res.status(401).json({ message: "Unauthorized" });
      } else {
        res.status(200).json(result);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  app.post("/auth/register", async (req, res) => {
    try {
      let result = await authService.register(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
}
