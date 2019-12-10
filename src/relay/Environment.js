import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';

const websocketURL = 'ws://localhost:4000/subscriptions';
const subscriptionClient = new SubscriptionClient(websocketURL, {
  reconnect: true
});

const subscriptionLink = new WebSocketLink(subscriptionClient);

function fetchQuery(operation, variables) {
  return fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const handleSubscription = (operation, variables) => {
  return execute(subscriptionLink, {
    query: operation.text,
    variables
  });
};

const environment = new Environment({
  network: Network.create(fetchQuery, handleSubscription),
  store: new Store(new RecordSource())
});

export default environment;
