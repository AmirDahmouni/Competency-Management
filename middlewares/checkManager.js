module.exports = function (req, res, next) {
    if (req.user.role !== "project manager")
      return res.status(403).send({message:"access denied"});
    next();
  };