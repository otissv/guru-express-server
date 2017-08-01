export default `
type IdePersistedHistory {
  id:          String
  endpoint:    String
  query:       String
  response:    String
  variables:   String
  RESULTS_:  RESULTS_
}

type ERROR_ {
  type:    String
  message: String
}

type RESULTS_ {
  result: String
  error:  ERROR_
}`;
