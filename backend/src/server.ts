import 'dotenv/config';
import app from './app';
import connectToDatabase from './models/connection';

const PORT = process.env.PORT || 3001;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }).catch((error) => {
    console.log(`Something went wrong. error: ${error}`);
    process.exit(0);
  });
