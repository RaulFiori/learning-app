import { Environment, RecordSource, Store } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import {
  RelayNetworkLayer,
  loggerMiddleware,
  perfMiddleware,
  errorMiddleware,
  cacheMiddleware,
  urlMiddleware,
} from 'react-relay-network-modern';
import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';

const websocketURL = 'ws://localhost:4000/subscriptions';
const subscriptionClient = new SubscriptionClient(websocketURL, {
  reconnect: true,
});

const subscriptionLink = new WebSocketLink(subscriptionClient);

const handleSubscription = (operation, variables) => {
  return execute(subscriptionLink, {
    query: operation.text,
    variables,
  });
};

const isDevelopment = process.env.NODE_ENV === 'development';

const network = new RelayNetworkLayer(
  [
    cacheMiddleware({ size: 100, ttl: 5 * 60 * 1000 }),
    isDevelopment ? loggerMiddleware() : null,
    isDevelopment ? perfMiddleware() : null,
    isDevelopment ? errorMiddleware() : null,
    urlMiddleware({ url: 'http://localhost:4000/graphql' }),
  ],
  { subscribeFn: handleSubscription },
);

const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
});

export default environment;
