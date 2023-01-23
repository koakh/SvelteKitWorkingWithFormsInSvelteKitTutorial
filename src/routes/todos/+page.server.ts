import type { PageServerLoad } from './$types'

import { getTodos } from '$lib/server/database'

export const load: PageServerLoad = async () => {
  // eslint-disable-next-line no-debugger
  const todos = getTodos()
  return { todos }
}
