import express from "express";
import cors from "cors";
import router from './routes/index';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(
    `This is the URL to your API ---> \x1B[34mhttp://localhost:${PORT}/api/puppycat`
  );
  console.log(
    "\x1B[32mYou can use the API to get all the puppies and cats, or a specific one by their name."
  );

});
