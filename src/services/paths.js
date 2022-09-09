// Env
const url_base = process.env.VUE_APP_URL_BASE

// Routes Community
export const PortadaInicio = () => `${url_base}/api/portada-inicio/`

export const PortadaRegistro = () => `${url_base}/api/portada-registro`

export const Tag = () => `${url_base}/api/tag/`

export const Categoria = () => `${url_base}/api/categoria/`

export const CategoriaDestacado = () => `${url_base}/api/categoria-destacado/`

export const CategoriaClick = () => `${url_base}/api/categoria-click/`

export const CatalogoCategoria = () => `${url_base}/api/catalogo/`

export const Cuenta = () => `${url_base}/api/cuenta/`

export const RegistroServicio = () => `${url_base}/api/registro-servicio/`

export const RegistroEmpresa = () => `${url_base}/api/registro-empresa/`
