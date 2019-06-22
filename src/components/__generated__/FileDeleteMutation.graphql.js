/**
 * @flow
 * @relayHash 9d0276f7ed3501a49823c2a9ab3f85a0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FileDeleteMutationVariables = {|
  fileId: string
|};
export type FileDeleteMutationResponse = {|
  +deleteFile: ?string
|};
export type FileDeleteMutation = {|
  variables: FileDeleteMutationVariables,
  response: FileDeleteMutationResponse,
|};
*/


/*
mutation FileDeleteMutation(
  $fileId: String!
) {
  deleteFile(id: $fileId)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "fileId",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "deleteFile",
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "fileId"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FileDeleteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "FileDeleteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "FileDeleteMutation",
    "id": null,
    "text": "mutation FileDeleteMutation(\n  $fileId: String!\n) {\n  deleteFile(id: $fileId)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4a25ee7ec2260ca73e1416c5c0e7e297';
module.exports = node;
