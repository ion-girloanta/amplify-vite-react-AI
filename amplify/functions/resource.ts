import { lambda } from '@aws-amplify/backend/function';

const gptEvaluateAnswer = lambda({
  name: 'gptEvaluateAnswer',
  runtime: 'python3.11',
  entry: './amplify/functions/gptEvaluateAnswer/index.py',
  environment: {
    BEDROCK_REGION: 'us-east-1',
  },
  permissions: {
    'bedrock:InvokeModel': ['*'],
  },
});

const parseCourseDocument = lambda({
  name: 'parseCourseDocument',
  runtime: 'python3.11',
  entry: './amplify/functions/parseCourseDocument/index.py',
  environment: {
    BUCKET_NAME: 'your-course-files-bucket',
  },
  permissions: {
    's3:GetObject': ['*'],
  },
});

const generateQuestions = lambda({
  name: 'generateQuestions',
  runtime: 'python3.11',
  entry: './amplify/functions/generateQuestions/index.py',
  environment: {
    BEDROCK_REGION: 'us-east-1',
  },
  permissions: {
    'bedrock:InvokeModel': ['*'],
  },
});
const imageGen = lambda({
  name: 'imageGen',
  runtime: 'python3.11',
  entry: './amplify/functions/imageGen/index.py',
  environment: {
    BEDROCK_REGION: 'us-east-1',
  },
  permissions: {
    'bedrock:InvokeModel': ['*'],
  },
});
const textGen = lambda({
  name: 'imageGen',
  runtime: 'python3.11',
  entry: './amplify/functions/textGen/index.py',
  environment: {
    BEDROCK_REGION: 'us-east-1',
  },
  permissions: {
    'bedrock:InvokeModel': ['*'],
  },
});

export {
  gptEvaluateAnswer,
  parseCourseDocument,
  generateQuestions,
  textGen,
  imageGen,
  
};
