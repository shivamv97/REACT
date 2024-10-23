import { appRoutes } from "./routes";

const appRouter = createBrowserRouter(appRoutes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
//root will render according to the AppRouter
