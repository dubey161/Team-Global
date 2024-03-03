import { authMiddleware } from "@clerk/nextjs";

const middleware = authMiddleware({
    publicRoutes: ["/"],
    ignoredRoutes: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
});

export default middleware;

export const config = {
    api: {
        bodyParser: false,
    },
};
