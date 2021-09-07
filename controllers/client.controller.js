import ClientService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;
  
    if(!client.name || !client.cpf || !client.phone || !client.email || !client.adress){
      throw new Error("Name, CPF, Phone, Email e Address são obrigatórios.");
    }  

    res.send( await ClientService.createClient(client));

    logge.info(`POST /client - ${ JSON.stringify(client) }`);
  } catch (err) {
    next(err);
  }
}

export default {
  createClient
}
