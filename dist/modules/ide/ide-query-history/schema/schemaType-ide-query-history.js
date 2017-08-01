"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\ntype IdeQueryHistory {\n  id:        String\n  endpoint:  String\n  query:     String\n  variables: String\n  response:  String\n  RESULTS_:  RESULTS_\n}\n\ntype ERROR_ {\n  type:    String\n  message: String\n}\n\ntype RESULTS_ {\n  result: String\n  error:  ERROR_\n}";
//# sourceMappingURL=schemaType-ide-query-history.js.map