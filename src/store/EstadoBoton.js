
export function update(originalDispositivos, id) {
    let dispositivos = [...originalDispositivos]

    const found = dispositivos.find((dispositivo) => {
        return dispositivo.id == id
    })
    if (found.estado == 'Inactivo') {
        found.estado = 'Activo'
    } else {
        found.estado = 'Inactivo'
    }
return dispositivos
}