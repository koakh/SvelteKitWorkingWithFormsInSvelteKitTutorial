import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return { message: 'hello budie, to slow' };
};