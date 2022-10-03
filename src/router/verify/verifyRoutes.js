const verifyRoutes = [
    {
        path: '/concepto',
        name: 'concepto',
        component: () => import("@/views/verify/ViewUsuarioConcepto.vue"),
    },
]

// Exports
export {
    verifyRoutes
}