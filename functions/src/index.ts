'use strict';

import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

const firebaseConfig = process.env.FIREBASE_CONFIG
  ? JSON.parse(process.env.FIREBASE_CONFIG)
  : {};

const app = express();

app.use(cors({ origin: true }));
app.use(cookieParser());

functions.logger.log(process.env.FIREBASE_CONFIG);

app.use((req, res) => {
  res.status(200).json({ message: 'Sup broo', from: firebaseConfig.projectId });
});

exports.ping = functions.https.onRequest(app);
