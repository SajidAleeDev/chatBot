import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

var serviceAccount = require("servesAccountKey.json");

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const adminDb = admin.firestore();

console.log("Firebase Admin Initialized");

export { adminDb };
