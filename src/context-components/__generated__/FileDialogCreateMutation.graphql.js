/**
 * @flow
 * @relayHash 29615e0e35b6eb5f5b67b99dd71fd495
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type File_file$ref = any;
export type FileInput = {|
  id?: ?string,
  name?: ?string,
  docType?: ?string,
|};
export type FileDialogCreateMutationVariables = {|
  file: FileInput
|};
export type FileDialogCreateMutationResponse = {|
  +createFile: ?{|
    +id: string,
    +$fragmentRefs: File_file$ref,
  |}
|};
export type FileDialogCreateMutation = {|
  variables: FileDialogCreateMutationVariables,
  response: FileDialogCreateMutationResponse,
|};
*/


/*
mutation FileDialogCreateMutation(
  $file: FileInput!
) {
  createFile(file: $file) {
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "file",
    "type": "FileInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "file",
    "variableName": "file"
  }
],
v2 = {
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
    "name": "FileDialogCreateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "name": "FileDialogCreateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "operationKind": "mutation",
    "name": "FileDialogCreateMutation",
    "id": null,
    "text": "mutation FileDialogCreateMutation(\n  $file: FileInput!\n) {\n  createFile(file: $file) {\n    id\n    ...File_file\n  }\n}\n\nfragment File_file on File {\n  id\n  name\n  docType\n  createdAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f39775f19be80dc8ccf1baeaaafd668f';
module.exports = node;
