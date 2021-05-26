const Seller = require("../models/sellers");

module.exports = {
    createNewSeller: async (body) => {
        return new Promise(async (resolve, reject) => {
          const { email, firstName, lastName } = body;
                let abc = await Seller.create({
                  email: email,
                  firstName: firstName,
                  lastName : lastName
                });
                resolve({ abc });
              }
        )
    },
    listSeller: async () => {
            return new Promise(async (resolve, reject) => {
                let abc = await Seller.find();
                resolve({ abc });
            }
        )
    }
}