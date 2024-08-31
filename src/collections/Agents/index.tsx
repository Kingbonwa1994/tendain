import type { CollectionConfig } from 'payload';

import { generatePreviewPath } from '@/utilities/generatePreviewPath';

export const Agents: CollectionConfig = {
  slug: 'agents',
  access: {
    create: ({ req: { user } }) => !!user,
    read: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    defaultColumns: ['name', 'email', 'phone', 'updatedAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'listings',
      type: 'relationship',
      relationTo: 'listings',
      hasMany: true,
    },
  ],
};

export default Agents;
