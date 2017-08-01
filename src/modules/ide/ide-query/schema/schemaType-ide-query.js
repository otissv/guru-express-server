export default `
type IdeQuery {
  id:          String
  collection:  String
  description: String
  endpoint:    String
  name:        String
  precache:    Boolean
  query:       String
  created:     String
  variables:   String
  results:     String
  response:    String
  RESULTS_:    RESULTS_
}

type ERROR_ {
  type:    String
  message: String
}

type RESULTS_ {
  result: String
  error:  ERROR_
}`;
