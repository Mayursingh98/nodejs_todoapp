import express from "express";
import { getMyProfile, login, logout, register } from "../controller/user.js";
import { iSAuthenicated } from "../middlewares/auth.js";

// MVC model view controller

const router = express.Router();

router.post("/new", register);

router.post("/login", login);
router.get("/logout", logout);

router.get("/me", iSAuthenicated, getMyProfile);

export default router;
