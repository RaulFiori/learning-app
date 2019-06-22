/**
 * @flow
 * @relayHash a55287b7b70a1f0290c9579696748e01
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type File_file$ref = any;
export type FilesQueryVariables = {||};
export type FilesQueryResponse = {|
  +files: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: File_file$ref,
  |}>
|};
export type FilesQuery = {|
  variables: FilesQueryVariables,
  response: FilesQueryResponse,
|};
*/


/*
query FilesQuery {
  files {
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
    "name": "FilesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "files",
        "storageKey": null,
        "args": null,
        "concreteType": "File",
        "plural": true,
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
    "name": "FilesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "files",
        "storageKey": null,
        "args": null,
        "concreteType": "File",
        "plural": true,
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
    "operationKind": "query",
    "name": "FilesQuery",
    "id": null,
    "text": "query FilesQuery {\n  files {\n    id\n    ...File_file\n  }\n}\n\nfragment File_file on File {\n  id\n  name\n  docType\n  createdAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fb04fad4c0beaedff030b26826e02aff';
module.exports = node;
