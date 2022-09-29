
// Compress
const comprimirImagen = (imagenComoArchivo, porcentajeCalidad) => {
    return new Promise((resolve, reject) => {

        // Const
        const $canvas = document.createElement("canvas")
        const imagen = new Image()

        // Load
        imagen.onload = () => {
            $canvas.width = imagen.width
            $canvas.height = imagen.height
            $canvas.getContext("2d").drawImage(imagen, 0, 0)
            $canvas.toBlob((blob) => {

                // If
                if (blob === null) {
                    return reject(blob)
                } else {
                    resolve(blob)
                }
            },
                "image/jpeg",
                porcentajeCalidad / 100
            )
        }

        // Const
        imagen.src = URL.createObjectURL(imagenComoArchivo)
    })
}

// Result
const ComprimirImagen = async (img, resolucion) => {
    // If
    if (img.length <= 0) {
        return
    }

    // Const
    const archivo = img;
    const blob = await comprimirImagen(archivo, resolucion)
    const myFile = new File([blob], 'image.jpeg', {
        type: blob.type,
    })

    // Return
    return myFile
}

//Exports
export {
    ComprimirImagen
}

