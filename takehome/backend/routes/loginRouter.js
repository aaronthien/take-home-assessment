const express = require ('express');
const router = express.Router();

const loginController = require('../controllers/loginController.js');


router.post('/login',
    loginController.userLogin,
    (req, res) => {
        return res.status(200).json(res.locals)
    }
)

router.post('/register',
    loginController.userRegister,
    (req, res) => {
        return res.status(200).json(res.locals)
    }
)


module.exports = router;