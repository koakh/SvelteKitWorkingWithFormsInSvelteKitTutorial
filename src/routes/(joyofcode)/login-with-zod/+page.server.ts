import { fail, redirect, type Actions } from '@sveltejs/kit'
import { zfd } from 'zod-form-data'
import { z } from 'zod';
import { REGEX_PASSWORD, REGEX_PASSWORD_MESSAGE } from '$lib/server';

export const actions: Actions = {
  default: async ({ request }) => {
    // get the form data
    const formData = await request.formData()

    // define the validation schema
    const loginSchema = zfd.formData({
      user: zfd.text(z.string().min(8).max(16)),
      password: zfd.text(z.string().trim().regex(REGEX_PASSWORD, REGEX_PASSWORD_MESSAGE))
    })

    // parse the validation schema
    const result = loginSchema.safeParse(formData);
    if (result.error) {
      console.log(`result.error.flatten().fieldErrors: [${JSON.stringify(result.error.flatten().fieldErrors, undefined, 2)}]`);
    }

    // in case of an error return the data and errors
    if (!result.success) {
      const data = {
        data: Object.fromEntries(formData),
        errors: result.error.flatten().fieldErrors,
      }
      return fail(400, data)
    }

    // redirect the user
    throw redirect(303, '/todos')
  }
}
