import { fail, redirect, type Actions } from '@sveltejs/kit'

export const actions: Actions = {
  default: async ({ request }) => {
    // get the form data
    const formData = await request.formData()

    // get the input values
    const user = String(formData.get('user'))
    const password = String(formData.get('password'))

    // gather errors
    const errors: Record<string, unknown> = {}

    if (!user || typeof user !== 'string') {
      errors.user = 'required'
    }

    if (!password || typeof password !== 'string') {
      errors.password = 'required'
    }

    // in case of an error return the data and errors
    if (Object.keys(errors).length > 0) {
      const data = {
        data: Object.fromEntries(formData),
        errors
      }
      return fail(400, data)
    }

    // if eveyrthing ok redirect the user to todos
    throw redirect(303, '/todos')
  }
}
