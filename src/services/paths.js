// Env
const url_base = process.env.VUE_APP_URL_BASE

// Routes Community
export const Portada = () => `${url_base}/api/portada/`

export const BusquedaFallida = () => `${url_base}/api/busqueda-fallida/`

export const Tag = () => `${url_base}/api/tag`

export const Categoria = () => `${url_base}/api/categoria/`

export const CategoriaRegistro = () => `${url_base}/api/categoria-registro/`

export const CategoriaDestacado = () => `${url_base}/api/categoria-destacado`

export const CategoriaClick = () => `${url_base}/api/categoria-click/`

export const CatalogoCategoria = () => `${url_base}/api/catalogo/`

export const CatalogoConcepto = () => `${url_base}/api/catalogo-concepto/`

export const Cuenta = () => `${url_base}/api/cuenta/`

export const RegistroServicio = () => `${url_base}/api/registro-servicio`

export const RegistroEmpresa = () => `${url_base}/api/registro-empresa`

export const Entidades = () => `${url_base}/api/entidades`

export const Publicidad = () => `${url_base}/api/publicidad`

export const PublicidadClick = () => `${url_base}/api/publicidad-click/`