import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
} from "../controller/task.js";
import { iSAuthenicated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", iSAuthenicated, newTask);

router.get("/my", iSAuthenicated, getMyTask);

router
  .route("/:id")
  .put(iSAuthenicated, updateTask)
  .delete(iSAuthenicated, deleteTask);

//  kissi bhi function ya handler ke andar next ko call karunga while passing error saara function exceute hona band hojaaega and sidha joo app.js mey joo app.use((err,req,res,next=>{})) call hoga
export default router;
