export default `
  idePersistedCollectionClear: IdePersisted

  idePersistedCreate (
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
  ): IdePersisted

  idePersistedRemove: IdePersisted`;
