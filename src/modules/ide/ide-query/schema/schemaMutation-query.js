export default `
  ideQueryCollectionClear: IdeQuery

  ideQueryCreate (
    id:          String
    collection:  String
    description: String
    endpoint:    String
    name:        String
    query:       String
    variables:   String
    results:     String
    response:    String
  ): IdeQuery

  ideQueryHistoryClear: [IdeQuery]
  
  ideQueryHistorySave (
    id:          String
    collection:  String
    description: String
    endpoint:    String
    name:        String
    query:       String
    variables:   String
    results:     String
    response:    String
  ): IdeQuery

  ideQueryRemove: IdeQuery`;
