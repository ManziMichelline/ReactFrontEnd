import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/house.tsx"),
    route("home/","routes/home.tsx"),
] satisfies RouteConfig;
