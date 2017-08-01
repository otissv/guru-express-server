export default `
  ideQueryHistoryClear: [IdeQueryHistory]
  
  ideQueryHistorySave (
    id:        String
    endpoint:  String
    query:     String
    variables: String
    response:  String
  ): IdeQueryHistory`;
