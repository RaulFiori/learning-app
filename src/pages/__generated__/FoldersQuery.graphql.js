/**
 * @flow
 * @relayHash ae802799fab02dfd70ced5be7da2a742
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FoldersQueryVariables = {||};
export type FoldersQueryResponse = {|
  +folders: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +createdAt: ?string,
  |}>
|};
export type FoldersQuery = {|
  variables: FoldersQueryVariables,
  response: FoldersQueryResponse,
|};
*/


/*
query FoldersQuery {
  folders {
    id
    name
    createdAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "folders",
    "storageKey": null,
    "args": null,
    "concreteType": "Folder",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "createdAt",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FoldersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "FoldersQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "FoldersQuery",
    "id": null,
    "text": "query FoldersQuery {\n  folders {\n    id\n    name\n    createdAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6a475415bf38556bfdb795c5579db4d6';
module.exports = node;
