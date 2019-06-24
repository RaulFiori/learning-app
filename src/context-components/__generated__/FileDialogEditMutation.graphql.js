/**
 * @flow
 * @relayHash b22afaad91772967487053d066c56815
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
export type FileDialogEditMutationVariables = {|
  file: FileInput
|};
export type FileDialogEditMutationResponse = {|
  +updateFile: ?{|
    +$fragmentRefs: File_file$ref
  |}
|};
export type FileDialogEditMutation = {|
  variables: FileDialogEditMutationVariables,
  response: FileDialogEditMutationResponse,
|};
*/


/*
mutation FileDialogEditMutation(
  $file: FileInput!
) {
  updateFile(file: $file) {
    ...File_file
    id
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FileDialogEditMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "plural": false,
        "selections": [
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
    "name": "FileDialogEditMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "plural": false,
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
    "name": "FileDialogEditMutation",
    "id": null,
    "text": "mutation FileDialogEditMutation(\n  $file: FileInput!\n) {\n  updateFile(file: $file) {\n    ...File_file\n    id\n  }\n}\n\nfragment File_file on File {\n  id\n  name\n  docType\n  createdAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa8e8abec4128ac2e77661173dc74f0f';
module.exports = node;
