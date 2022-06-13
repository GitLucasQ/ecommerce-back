import { Router } from "express";
import { generateRandomNumbers, getDatos } from "../controllers/UtilController";

const router = Router();

router.get('/randoms', generateRandomNumbers);
router.get('/datos', getDatos);

export default router;