import * as functions from "firebase-functions";
import { foo } from 'my-lib'; // Once more, it's super important this will point to the module and not the relative path. Make sure your IDE does this for you.

export const helloWorld = functions.https.onRequest(
  (request, response) => {
    const value = foo();
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!" + value);
  });
