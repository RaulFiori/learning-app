/**
 * @flow
 * @relayHash 76ce4a993cc9614ab65ffe555a291fef
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type File_file$ref = any;
export type FilesSubscriptionVariables = {||};
export type FilesSubscriptionResponse = {|
  +fileEdited: ?{|
    +id: string,
    +$fragmentRefs: File_file$ref,
  |}
|};
export type FilesSubscription = {|
  variables: FilesSubscriptionVariables,
  response: FilesSubscriptionResponse,
|};
*/


/*
subscription FilesSubscription {
  fileEdited {
    id
    ...File_file
  }
}

fragment File_file on File {
  id
  name
  docType
  createdAt
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FilesSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "fileEdited",
        "storageKey": null,
        "args": null,
        "concreteType": "File",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "File_file",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FilesSubscription",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "fileEdited",
        "storageKey": null,
        "args": null,
        "concreteType": "File",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
            "name": "docType",
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
    ]
  },
  "params": {
    "operationKind": "subscription",
    "name": "FilesSubscription",
    "id": null,
    "text": "subscription FilesSubscription {\n  fileEdited {\n    id\n    ...File_file\n  }\n}\n\nfragment File_file on File {\n  id\n  name\n  docType\n  createdAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '02940771530302901b5c78a865f41091';
module.exports = node;
