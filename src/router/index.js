// Imports
import { createRouter, createWebHistory } from "vue-router"

// Community 
import { communityRoutes } from "@/router/community/communityRoutes"

// Verify
import { verifyRoutes } from "@/router/verify/verifyRoutes"

// Routes
const routes = [
    ...communityRoutes,
    ...verifyRoutes,
    {
        path: "/:pathMatch(.*)*",
        name: "Notfound",
        component: () => import("@/views/community/ViewNotFound.vue")
    }
]

// Initialization
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

// Exports
export default router
