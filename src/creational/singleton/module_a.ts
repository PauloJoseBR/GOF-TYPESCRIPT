import { MyDatabaseClassic } from './db/my-database-classic';

const db1 = MyDatabaseClassic.getInstance();
db1.add({ name: 'Carla', age: 30 });
db1.show();
