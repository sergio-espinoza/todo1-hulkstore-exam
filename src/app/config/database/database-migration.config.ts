
export function migrationFactory() {
  return {
    1: (db: IDBDatabase, transaction: IDBTransaction) => {
      const store = transaction.objectStore('user');
      store.createIndex('phone', 'phone', { unique: true });
    },
  };
}
