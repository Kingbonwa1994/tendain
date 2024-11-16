import * as migration_20241115_173932_migration from './20241115_173932_migration';
import * as migration_20241116_030332_migration from './20241116_030332_migration';

export const migrations = [
  {
    up: migration_20241115_173932_migration.up,
    down: migration_20241115_173932_migration.down,
    name: '20241115_173932_migration',
  },
  {
    up: migration_20241116_030332_migration.up,
    down: migration_20241116_030332_migration.down,
    name: '20241116_030332_migration'
  },
];
