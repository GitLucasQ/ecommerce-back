import { Router } from "express";
import { generateRandomNumbers } from "../controllers/UtilController";

const router = Router();

router.get('/randoms', generateRandomNumbers);

export default router;