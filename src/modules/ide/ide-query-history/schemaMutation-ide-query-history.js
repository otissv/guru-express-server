export default `
  ideQueryHistoryClear: IdeQueryHistory
  
  ideQueryHistorySave (
    id:        String
    query:     String
    variables: String
    response:  String
  ): IdeQueryHistory`;
