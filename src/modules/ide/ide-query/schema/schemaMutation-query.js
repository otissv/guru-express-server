export default `
  ideQueryCollectionClear: IdeQuery

  ideQueryCreate (
    id:          String
    collection:  String
    description: String
    endpoint:    String
    name:        String
    precache:    Boolean
    query:       String
    variables:   String
    results:     String
    response:    String
  ): IdeQuery

  ideQueryRemove: IdeQuery`;
