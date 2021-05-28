const Seller = require("../models/sellers");
const User = require("../models/users");

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
  },
  createNewUser: async (body) => {
      return new Promise(async (resolve, reject) => {
        const { email, firstName, lastName, appointmentRequest } = body;
        let a = await User.findOne({email: email});
        if(!a)
        {
          let abc = await User.create({
            email: email,
            firstName: firstName,
            lastName : lastName,
            appointmentRequest: appointmentRequest
          });
          resolve({ abc });
        }else{
          reject({ error: "User Already Exist" });
        }
      }
      )
  },
  listUser: async () => {
          return new Promise(async (resolve, reject) => {
              let abc = await User.find();
              resolve({ abc });
          }
      )
  },
  updateSeller: async (body) => {
    return new Promise(async (resolve, reject) => {
      const { email, dateTime } = body;
      let abc = await Seller.update( { email: email }, { $push: { slots: dateTime } });
      console.log(abc)
      resolve({ abc });
      }
    )
  },
  acceptSlot: async (body) => {
    return new Promise(async (resolve, reject) => {
      const {id} = body;
      const filter = { _id: id };
      const update = { status: "accept" };
      await User.findOneAndUpdate(filter, update);
      let abc = await User.find();
      resolve({ abc });
    })
  },
  rejectSlot: async (body) => {
    return new Promise(async (resolve, reject) => {
      const {id} = body;
      const filter = { _id: id };
      const update = { status: "reject" };
      await User.findOneAndUpdate(filter, update);
      let abc = await User.find();
      resolve({ abc });
    })
  }
}