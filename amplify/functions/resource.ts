/*
  Must be run in the Amplify project root directory.
  To install the Amplify backend package, run:  
    npm install --save-dev @aws-amplify/backend
*/
import { defineFunction } from "@aws-amplify/backend";

const parseCourseDocument = defineFunction({
  name: 'parseCourseDocument',
  runtime: 'python3.11' as any,
  entry: './parseCourseDocument/index.py',
  environment: {
    BUCKET_NAME: 'your-course-files-bucket',
  },
  timeoutSeconds: 10,
  memoryMB: 512,
  /*
  permissions: {
    's3:GetObject': ['arn:aws:s3:::your-course-files-bucket/*'],
    'bedrock:InvokeModel': ['*'],                    
  }*/
 });

const gptEvaluateAnswer = defineFunction({
  name: 'gptEvaluateAnswer',
  runtime: 'python3.11' as any,
  entry: './gptEvaluateAnswer/index.py',
  timeoutSeconds: 30,
  memoryMB: 512,  
  environment: {
    BEDROCK_REGION: 'us-east-1',
  },
 });

const generateQuestions = defineFunction({
  name: 'generateQuestions',
  runtime: 'python3.11' as any,
  entry: './generateQuestions/index.py',
  environment: {
    BEDROCK_REGION: 'us-east-1',
  }
});

const imageGen = defineFunction({
  name: 'imageGen',
  runtime: 'python3.11' as any,
  entry: './imageGen/index.py',
  environment: {
    BEDROCK_REGION: 'us-east-1',
  }
});

const textGen = defineFunction({
  name: 'imageGen',
  runtime: 'python3.11' as any,
  entry: './textGen/index.py',
  environment: {
    BEDROCK_REGION: 'us-east-1',
  }
});


export {
  gptEvaluateAnswer,
  parseCourseDocument,
  generateQuestions,
  textGen,
  imageGen,
  
};
