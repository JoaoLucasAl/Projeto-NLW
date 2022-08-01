import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingController } from "./controllers/SettingController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingController()
const usersController = new UsersController()
const messagesController = new MessagesController()


routes.post("/settings", settingsController.create)
routes.post("/settings/:username", settingsController.findByUserName)
routes.put("/settings/:username", settingsController.update)

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export{routes}