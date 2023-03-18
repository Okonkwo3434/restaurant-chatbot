const {signup, login, setAvatar, getAllUsers,} = require("../controllers/usersController");
const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.post("/allUsers/:id", getAllUsers);

module.exports = router;