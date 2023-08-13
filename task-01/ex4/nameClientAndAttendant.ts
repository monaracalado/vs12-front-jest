export default function NameClientAndAttendant(client, attendant){
    if(!isNaN(client) || !isNaN(attendant)){
        throw new Error('Operação inválida!')
    }
    return `Olá ${client} eu me chamo ${attendant}, em que posso ajudar?`
}