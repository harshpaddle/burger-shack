const connection = require('./connection');

const findAll = () => {

  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', function (err, dbBurgerData) {
      if (err) {

        return reject(err);
      }

      return resolve(dbBurgerData);
    });
  });
};



const findById = burgerId => {

  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function (err, dbBurgerData) {
      if (err) {

        return reject(err);
      }

      return resolve(dbBurgerData);
    });
  });
};



const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', [burgerDataObj], function (err, dbBurgerData) {
      if (err) {

        return reject(err);
      }

      return resolve(dbBurgerData);
    });
  });
};



const update = (devouredValue, burgerId) => {
  return new Promise((resolve, reject) => {


    devouredValue = (devouredValue === "true") ?
      true : false;

    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devouredValue, burgerId], function (err, dbBurgerData) {

      if (err) {
        return reject(err);
      } else if (dbBurgerData.changedRows === 0) {
        return reject({
          message: "You probably have the wrong ID"
        });
      } else {
        return resolve(dbBurgerData);
      }
    })
  })
}



const remove = (burgerId) => {
  return new Promise((resolve, reject) => {

    connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], function (err, dbBurgerData) {

      if (err) {
        return reject(err);
      } else if (dbBurgerData.affectedRows === 0) {
        return reject({
          message: "You probably have the wrong ID"
        });
      } else {
        return resolve(dbBurgerData);
      }
    })
  })
}


module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};