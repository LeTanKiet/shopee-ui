import configs from "~/configs";
import { AuthLayout, MainLayout } from "~/layouts";
import { CartPage, HomePage, LoginPage, NotFoundPage } from "~/pages";

const publicRoutes = [
    {
        path: configs.routes.home,
        component: HomePage,
        layout: MainLayout,
    },
    {
        path: configs.routes.cart,
        component: CartPage,
    },

    {
        path: configs.routes.login,
        component: LoginPage,
        layout: AuthLayout,
    },
    {
        path: configs.routes.not_found,
        component: NotFoundPage,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
