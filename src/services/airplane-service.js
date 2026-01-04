const { AirplaneRepository } = require("../repositories");

const airplaneRepository = new AirplaneRepository();

async function createAirPlane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error; // TODO :  Need to handle this error in correct manner. 
  }
}

module.exports = {
  createAirPlane,
};
