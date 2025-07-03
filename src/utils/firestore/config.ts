import admin from "firebase-admin";

const databaseURL = "https://default.firebaseio.com";

export function getFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(`${process.cwd()}/service-account.json`),
      databaseURL,
    });
  }

  return admin;
}

const firebaseAdmin = getFirebaseAdmin();

const db = firebaseAdmin.firestore();

export { firebaseAdmin, db };