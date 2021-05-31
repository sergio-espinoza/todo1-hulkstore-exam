
export function migrationFactory() {
  return {
    2: (db: IDBDatabase, transaction: IDBTransaction) => {
      const store = transaction.objectStore('user');
      store.createIndex('phone', 'phone', { unique: true });
    },
  };
}
