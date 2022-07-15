import configs from "~/configs";
import AuthLayout from "~/layouts/AuthLayout";
import MainLayout from "~/layouts/MainLayout";
import Cart from "~/pages/Cart/Cart";
import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import NotFound from "~/pages/NotFound/NotFound";

const publicRoutes = [
    {
        path: configs.routes.home,
        component: Home,
        layout: MainLayout,
    },
    {
        path: configs.routes.cart,
        component: Cart,
    },

    {
        path: configs.routes.login,
        component: Login,
        layout: AuthLayout,
    },
    {
        path: configs.routes.not_found,
        component: NotFound,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
