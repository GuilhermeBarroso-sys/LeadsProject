import { Router } from "express";
import { reportsRoutes } from "../app/reports/routes/reports.routes";


const routes = Router();
routes.use("/reports", reportsRoutes);


export { routes };