
// Compress
const comprimirImagen = (imagenComoArchivo, porcentajeCalidad) => {
    return new Promise((resolve, reject) => {

        const $canvas = document.createElement("canvas")
        const imagen = new Image()

        imagen.onload = () => {
            $canvas.width = imagen.width
            $canvas.height = imagen.height
            $canvas.getContext("2d").drawImage(imagen, 0, 0)
            $canvas.toBlob((blob) => {

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
        imagen.src = URL.createObjectURL(imagenComoArchivo)
    })
}

// Result
const ComprimirImagen = async (img) => {
    if (img.length <= 0) {
        return
    }

    const archivo = img;
    const blob = await comprimirImagen(archivo, 50)

    const myFile = new File([blob], 'image.jpeg', {
        type: blob.type,
    })

    return myFile
}

//Exports
export {
    ComprimirImagen
}

