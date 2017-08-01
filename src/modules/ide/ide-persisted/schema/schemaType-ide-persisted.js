export default `
type IdePersisted {
  id:          String
  collection:  String
  created:     String
  description: String
  endpoint:    String
  name:        String
  query:       String
  response:    String
  results:     String
  variables:   String
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
