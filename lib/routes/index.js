import { Router } from "express";
import countriesRoutes from "./countries.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/countries", countriesRoutes)

export default router;
