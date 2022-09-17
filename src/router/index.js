// Imports
import { createRouter, createWebHistory } from "vue-router"

// Routes Community 
import { communityRoutes } from "@/router/community/communityRoutes"

// Routes
const routes = [
    ...communityRoutes,
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
