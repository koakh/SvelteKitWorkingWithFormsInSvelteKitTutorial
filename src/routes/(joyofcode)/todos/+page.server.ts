import type { PageServerLoad } from './$types'
import { fail, type Actions } from '@sveltejs/kit'

import { addTodo, clearTodos, getTodos, removeTodo } from '$lib/server/database'

export const load: PageServerLoad = async () => {
  const todos = getTodos()
  return { todos }
}

// defined a sleep function to simulate a slow response which I’m going to use inside the addTodo action.
async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const actions: Actions = {
  addTodo: async ({ request }) => {
    const formData = await request.formData()
    const todo = String(formData.get('todo'))

    if (!todo) {
      return fail(400, { todo, missing: true })
    }
    
    // Naif validation, just to test value on input keeps filled
    if (todo && todo.length < 2) {
      return fail(400, { todo, missing: true })
    }

    // simulate a slow response
    await sleep(2000)

    addTodo(todo)

    return { success: true }
  },

  removeTodo: async ({ request }) => {
    const formData = await request.formData()
    const todoId = Number(formData.get('id'))
    
    removeTodo(todoId)
    
    return { success: true }
  },

  clearTodos: () => {
    clearTodos()
  }
}
