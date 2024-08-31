import type { CollectionConfig } from 'payload';

export const Favorites: CollectionConfig = {
  slug: 'favorites',
  access: {
    create: ({ req: { user } }) => !!user,
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'listing',
      type: 'relationship',
      relationTo: 'listings',
      required: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [({ value }) => value || new Date()],
      },
    },
  ],
  admin: {
    defaultColumns: ['user', 'listing', 'createdAt'],
    useAsTitle: 'listing',
  },
};

export default Favorites;
