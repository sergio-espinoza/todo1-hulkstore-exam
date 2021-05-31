import { DBConfig, DBMode } from 'ngx-indexed-db';
import { migrationFactory } from './database-migration.config';

export const dbConfig: DBConfig = {
  name: 'hulkStoreDB',
  version: 2,
  objectStoresMeta: [
    {
      store: 'user',
      storeConfig: { keyPath: '_id', autoIncrement: false },
      storeSchema: [
        { name: 'username', keypath: 'username', options: { unique: true } },
        { name: 'password', keypath: 'password', options: { unique: false } },
        { name: 'image', keypath: 'image', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
      ]
    },
    {
      store: 'category',
      storeConfig: { keyPath: '_id', autoIncrement: false },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: true } },
        { name: 'image', keypath: 'image', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'updatedAt', keypath: 'updatedAt', options: { unique: false } },
      ]
    },
    {
      store: 'product',
      storeConfig: { keyPath: '_id', autoIncrement: false },
      storeSchema: [
        { name: 'categoryId', keypath: 'categoryId', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: true } },
        { name: 'image', keypath: 'image', options: { unique: false } },
        { name: 'quantity', keypath: 'quantity', options: { unique: false } },
        { name: 'price', keypath: 'price', options: { unique: false } },
        { name: 'mark', keypath: 'mark', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
        { name: 'features', keypath: 'features', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'updatedAt', keypath: 'updatedAt', options: { unique: false } },
      ]
    },
    {
      store: 'purchase',
      storeConfig: { keyPath: '_id', autoIncrement: false },
      storeSchema: [
        { name: 'userId', keypath: 'userId', options: { unique: false } },
        { name: 'customerName', keypath: 'customerName', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'updatedAt', keypath: 'updatedAt', options: { unique: false } },
      ]
    },
    {
      store: 'sale',
      storeConfig: { keyPath: '_id', autoIncrement: false },
      storeSchema: [
        { name: 'userId', keypath: 'userId', options: { unique: false } },
        { name: 'cardId', keypath: 'cardId', options: { unique: false } },
        { name: 'paymentType', keypath: 'paymentType', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'updatedAt', keypath: 'updatedAt', options: { unique: false } },
      ]
    },
    {
      store: 'productPurchase',
      storeConfig: { keyPath: '_id', autoIncrement: true },
      storeSchema: [
        { name: 'productId', keypath: 'productId', options: { unique: false } },
        { name: 'purchaseId', keypath: 'purchaseId', options: { unique: false } },
        { name: 'investment', keypath: 'investment', options: { unique: false } },
        { name: 'quantity', keypath: 'quantity', options: { unique: false } }
      ]
    },
    {
      store: 'productSale',
      storeConfig: { keyPath: '_id', autoIncrement: true },
      storeSchema: [
        { name: 'productId', keypath: 'productId', options: { unique: false } },
        { name: 'saleId', keypath: 'saleId', options: { unique: false } },
        { name: 'salePrice', keypath: 'salePrice', options: { unique: false } },
        { name: 'quantity', keypath: 'quantity', options: { unique: false } }
      ]
    },
  ],
  migrationFactory
};
