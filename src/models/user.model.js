const sql = require('./db.js');

const User = function(user){
  this.firstname = user.firstname;
  this.lastname =user.lastname ;
  this.email =user.email;
  this.password=user.password;
  this.role =user.role;
};
User.create =(newUser,result) =>{
  sql.query("INSERT INTO userData SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created User: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};
User.find =
User.findById = (id, result) => {
  sql.query(`SELECT * FROM userData WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};
//list
User.getAllUser= result => {
  sql.query("SELECT * FROM userData  ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("users: ", res);
    result(null, res);
  });
};
User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE userData SET firstname = ?, lastname = ?, email = ?,  , Role = ? WHERE id = ?",
    [user.Firstname, user.Lastname,user.email,  id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated user: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};
User.remove = (id, result) => {
  sql.query("DELETE FROM userData WHERE  id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted user with id: ", id);
    result(null, res);
  });
};


module.exports = User;
