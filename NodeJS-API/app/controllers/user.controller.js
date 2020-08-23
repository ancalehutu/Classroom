exports.allAccess = (req, res) => {
    res.status(200).send("Welcome to Classroom application!");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("Welcome, user!");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Welcome, admin!");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Welcome, moderator!");
  };