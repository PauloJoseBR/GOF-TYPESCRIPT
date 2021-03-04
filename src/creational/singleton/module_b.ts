import { MyDatabaseClassic } from './db/my-database-classic';

const db1 = MyDatabaseClassic.getInstance();
db1.add({ name: 'Clarissa', age: 30 });
db1.show();
