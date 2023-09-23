function retornarHora(data) {
    if (data && !(data instanceof Date)) {
        throw TypeError('Eperando instancia de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const hora = retornarHora()
    console.log(hora)
} catch (error) {
    
} finally {
    console.log('Tenha um bom dia!')
}