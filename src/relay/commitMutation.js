import { commitMutation } from 'relay-runtime';
import environment from './Environment';

export default args => commitMutation(environment, args);
