import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import * as functions from './functions/resource';
export const backend = defineBackend({
  auth,
  data,
  functions,
});
