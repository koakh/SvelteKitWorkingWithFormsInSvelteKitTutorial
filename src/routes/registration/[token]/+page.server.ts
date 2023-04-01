import { getCountries, validateToken } from '$lib/server/api';
import { error, fail } from '@sveltejs/kit';
import { z } from 'zod';

import { REGEX_PASSWORD, REGEX_PASSWORD_MESSAGE } from '$lib/server';
import type { ValidateTokenStatus } from './types/enums';
import type { Country } from './types/interfaces';

export type ValidateTokenData = {
  status: ValidateTokenStatus;
  countries?: Country[];
};

export type CountriesData = {
  countries: Country[], countriesCount: number;
};

const validationSchema = z.object({
  email: z.string().trim().email().min(1),
  password: z.string().trim().regex(REGEX_PASSWORD, REGEX_PASSWORD_MESSAGE),
});

export const load = async ({ params }) => {
  const { token } = params;
  const data = await validateToken<ValidateTokenData>(token);
  if (data) {
    const { countries } = await getCountries<CountriesData>();
    return { ...data, countries };
  }
  throw error(404, 'Not found');
};

// form actions

export const actions = {
  registration: async (event) => {
    // const formData = Object.fromEntries(await request.formData());
    const formData = await event.request.formData();
    // const email = formData.get('email');
    // const password = formData.get('password');

    // console.log(`email: [${email}]`);
    // console.log(`password: [${password}]`);

    // require Object.fromEntries else formData seems empty
    const validationData = validationSchema.safeParse(Object.fromEntries(formData));
    // console.log(validationData);
    // console.log(`formData: [${JSON.stringify(formData, undefined, 2)}]`);

    // console.log(`formData: [${JSON.stringify(formData, undefined, 2)}]`);

    // if (!email) {
    //   return fail(400, { email: 'mail', missing: true })
    // }

    // Naif validation, just to test value on input keeps filled
    // if (email && email.length < 20) {
    //   console.log('FAIL')
    //   return fail(400, { email, missing: true })
    // }

    if (!validationData.success) {
      // Loop through the errors array and create a custom errors array
      const errors = validationData.error.errors.map((error) => {
        return {
          field: error.path[0],
          message: error.message
        };
      });
      return fail(400, { error: true, errors });
    }
    return { success: true }
  }
};