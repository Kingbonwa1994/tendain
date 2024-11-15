import * as migration_20241115_173932_migration from './20241115_173932_migration';

export const migrations = [
  {
    up: migration_20241115_173932_migration.up,
    down: migration_20241115_173932_migration.down,
    name: '20241115_173932_migration'
  },
];
