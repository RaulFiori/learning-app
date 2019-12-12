/**
 * @flow
 * @relayHash b8dd1729e3eb2578d6a74fc83fb49770
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type File_file$ref = any;
export type FilesSubscriptionVariables = {||};
export type FilesSubscriptionResponse = {|
  +fileChange: ?{|
    +fileEdited: ?{|
      +id: string,
      +$fragmentRefs: File_file$ref,
    |},
    +fileCreated: ?{|
      +id: string,
      +$fragmentRefs: File_file$ref,
    |},
  |}
|};
export type FilesSubscription = {|
  variables: FilesSubscriptionVariables,
  response: FilesSubscriptionResponse,
|};
*/


/*
subscription FilesSubscription {
  fileChange {
    fileEdited {
      id
      ...File_file
    }
    fileCreated {
      id
      ...File_file
    }
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
},
v1 = [
  (v0/*: any*/),
  {
    "kind": "FragmentSpread",
    "name": "File_file",
    "args": null
  }
],
v2 = [
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
];
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
        "name": "fileChange",
        "storageKey": null,
        "args": null,
        "concreteType": "FileSubscription",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fileEdited",
            "storageKey": null,
            "args": null,
            "concreteType": "File",
            "plural": false,
            "selections": (v1/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fileCreated",
            "storageKey": null,
            "args": null,
            "concreteType": "File",
            "plural": false,
            "selections": (v1/*: any*/)
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
        "name": "fileChange",
        "storageKey": null,
        "args": null,
        "concreteType": "FileSubscription",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fileEdited",
            "storageKey": null,
            "args": null,
            "concreteType": "File",
            "plural": false,
            "selections": (v2/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fileCreated",
            "storageKey": null,
            "args": null,
            "concreteType": "File",
            "plural": false,
            "selections": (v2/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "subscription",
    "name": "FilesSubscription",
    "id": null,
    "text": "subscription FilesSubscription {\n  fileChange {\n    fileEdited {\n      id\n      ...File_file\n    }\n    fileCreated {\n      id\n      ...File_file\n    }\n  }\n}\n\nfragment File_file on File {\n  id\n  name\n  docType\n  createdAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f955cb84de26752c8a37e79d08bd10d4';
module.exports = node;
