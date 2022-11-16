// import { connect } from 'mongoose';

// const options = {
//   user: 'user',
//   pass: 'password',
//   dbName: 'applicationManager',
// };

// connect('mongodb://localhost:27017/', options);

import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017/appTracker';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
