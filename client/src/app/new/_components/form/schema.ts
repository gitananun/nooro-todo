import { z } from 'zod';

export const schema = z.object({
  title: z.string({ description: 'Ex. Brush your teeth' }).nonempty(),
  color: z.string().optional(),
});

export type FormFields = z.infer<typeof schema>;
