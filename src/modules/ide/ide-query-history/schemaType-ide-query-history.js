export default `
type IdeQueryHistory {
  id:        String
  query:     String
  variables: String
  response:  String
  RESULTS_:   RESULTS_
}

type ERROR_ {
  type:    String
  message: String
}

type RESULTS_ {
  result: String
  error:  ERROR_
}`;
