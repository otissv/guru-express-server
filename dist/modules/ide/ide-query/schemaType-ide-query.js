"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\ntype IdeQuery {\n  id:          String\n  collection:  String\n  description: String\n  name:        String\n  precache:    Boolean\n  query:       String\n  created:     String\n  variables:   String\n  results:     String\n  response:    String\n  RESULTS_:    RESULTS_\n}\n\ntype ERROR_ {\n  type:    String\n  message: String\n}\n\ntype RESULTS_ {\n  result: String\n  error:  ERROR_\n}";
//# sourceMappingURL=schemaType-ide-query.js.map