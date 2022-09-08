const communityRoutes = [
    {
        path: '/',
        name: 'Inicio',
        component: () => import("@/views/community/ViewInicio.vue"),
    },

    {
        path: '/categoria/:slug',
        name: 'Categoria',
        component: () => import("@/views/community/ViewCategoria.vue"),
        props: true
    }, 

    {
        path: '/catalogo/:slug',
        name: 'Catalogo',
        component: () => import("@/views/community/ViewCatalogo.vue"),
        props: true
    },

    {
        path: '/cuenta/:slug',
        name: 'Cuenta',
        component: () => import("@/views/community/ViewCuenta.vue"),
        props: true
    },

    {
        path: '/registro-empresa',
        name: 'Registro-Empresa',
        component: () => import("@/views/community/ViewRegistroEmpresa.vue"),
    },

    {
        path: '/registro-servicio',
        name: 'Registro-Servicio',
        component: () => import("@/views/community/ViewRegistroServicio.vue"),
    },

    {
        path: '/sobre-nosotros',
        name: 'Sobre-Nosotros',
        component: () => import("@/views/community/ViewSobreNosotros.vue"),
    },

    {
        path: '/servicios-completos',
        name: 'servicios-completos',
        component: () => import("@/views/community/viewServicios.vue"),
        props: true
    },
]

// Exports
export {
    communityRoutes
}