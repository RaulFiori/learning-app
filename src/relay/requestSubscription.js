import { requestSubscription } from 'react-relay';
import environment from './Environment';

export default args => requestSubscription(environment, args);
