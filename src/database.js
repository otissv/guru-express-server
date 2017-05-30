/*
* Database connections
*/

export default function databaseConnections ({ databases, config }) {
  const db = databases.databases;

  return Object.keys(db).reduce((previousObj, currentKey) => {
    if (currentKey === 'default') return previousObj;
    const options = config[currentKey];

    return {
      ...previousObj,
      [currentKey]: db[currentKey].connect(options)
    };
  }, {});
}
