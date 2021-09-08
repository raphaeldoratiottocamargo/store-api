import ClientService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;

    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error("Name, CPF, Phone, Email e Address são obrigatórios.");
    }

    res.send(await ClientService.createClient(client));

    global.logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await ClientService.getClients());
    global.logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await ClientService.getClient(req.params.id));
    global.logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    await ClientService.deleteClient(req.params.id);
    res.end();
    global.logger.info("DELETE /client");
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
};
