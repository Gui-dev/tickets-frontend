import { z } from 'zod'

export const createEventValidation = z.object({
  title: z.string({
    required_error: 'O título é obrigátorio',
  }),
  description: z.string({
    required_error: 'A Descrição é obrigátorio',
  }),
  city: z.string({
    required_error: 'A cidade é obrigátoria',
  }),
  location: z.string({
    required_error: 'O localização é obrigátoria',
  }),
  date: z.string(),
  hour: z.string({
    required_error: 'A hora é obrigátorio',
  }),
  price: z.coerce
    .string()
    .refine((price) => Number(price))
    .nullable(),
  sector: z.string(),
  categories: z.array(
    z.string({
      required_error: 'Categoria é obrigatorio',
    }),
    {
      required_error: 'Categoria é obrigatorio',
      invalid_type_error: 'Selecione uma ou mais categorias',
    },
  ),
  cupom: z.string().nullable(),
  banner: z
    .custom<FileList>()
    .transform((file) => file.length > 0 && file.item(0))
    .refine((file) => !file || (!!file && file.size <= 5 * 1024 * 1024), {
      message: 'The profile picture must be a maximum of 10MB.',
    })
    .refine((file) => !file || (!!file && file.type?.startsWith('image')), {
      message: 'Only images are allowed to be sent.',
    }),
  flyers: z.any(),
})

export type CreateEventValidationData = z.infer<typeof createEventValidation>
