
import express from 'express';
import { SignUp } from '../models/SignUpModel.js';

const router = express.Router();

 router.post('/', async (req, res) => {
  try {
    if (!req.body.EmailId || !req.body.Password) {
      return res.status(400).send({
        message: 'Send all the required info',
      });
    }

    const newUser = {
      EmailId: req.body.EmailId,
      Password: req.body.Password,
    };

    const user = await SignUp.create(newUser);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

export default router;

