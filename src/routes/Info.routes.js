import { Router } from "express";
import { getProcessInfo } from "../controllers/InfoController";

const router = Router();

router.get("/", getProcessInfo);

export default router;