import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error('JWT_KEY must be defined');

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
  
}

app.get("/api/users/currentuser", (req, res) => {
  res.send(res);
});

app.listen(3000, () => {
  console.log("listening on 3000!!");
});

start();