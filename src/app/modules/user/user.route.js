import { Router } from "express";
import { addUser, getUser, updateUser } from "../controller/userController";
import verifyToken from "../../middleware/verifyToken";
import verifyAdmin from "../../middleware/verifyAdmin";


const router = Router();

router.get("/", verifyToken, getUser);
router.post("/", addUser);
router.put("/:id", verifyToken, verifyAdmin, updateUser);

export const UserRoute = router;