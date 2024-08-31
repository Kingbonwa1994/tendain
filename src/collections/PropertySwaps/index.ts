import type { CollectionConfig } from 'payload';

export const PropertySwaps: CollectionConfig = {
  slug: 'property-swaps',
  access: {
    create: ({ req: { user } }) => !!user,
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'fromListing',
      type: 'relationship',
      relationTo: 'listings',
      required: true,
    },
    {
      name: 'toListing',
      type: 'relationship',
      relationTo: 'listings',
      required: true,
    },
    {
      name: 'additionalPayment',
      type: 'number',
    },
    {
      name: 'status',
      type: 'select',
      options: ['Pending', 'Accepted', 'Declined'],
      required: true,
    },
    {
      name: 'initiator',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
  ],
};

export default PropertySwaps;
