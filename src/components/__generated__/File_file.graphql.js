/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type File_file$ref: FragmentReference;
declare export opaque type File_file$fragmentType: File_file$ref;
export type File_file = {|
  +id: string,
  +name: ?string,
  +docType: ?string,
  +$refType: File_file$ref,
|};
export type File_file$data = File_file;
export type File_file$key = {
  +$data?: File_file$data,
  +$fragmentRefs: File_file$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "File_file",
  "type": "File",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a27fe880bae0343e2eb2157c0761cd7a';
module.exports = node;
