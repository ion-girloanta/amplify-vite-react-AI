// amplify/storage/resource.ts
import { defineStorage } from "@aws-amplify/backend";
import { gptEvaluateAnswer } from "../functions/resource";

export const storage = defineStorage({
  name: 'answers',
  access: allow => ({
    'room/*': [
      allow.authenticated.to(['get', 'write', 'delete']),
      allow.guest.to(['get', 'write', 'delete']),
      // grant the "generateHaiku" function "read" access
      allow.resource(gptEvaluateAnswer).to(['read'])
    ]
  })
});
