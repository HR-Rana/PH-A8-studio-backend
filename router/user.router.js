import {
    createUsersController,
    deleteUsersController,
    getUsersController,
    updateUsersController
} from "../controller/users.controller.js";

import express from "express"
const router = express.Router();


router.get("/getUsers", getUsersController)
router.post("/createUsers", createUsersController)
router.put("/updateUsers", updateUsersController)
router.delete("/deleteUsers", deleteUsersController)








export default router;