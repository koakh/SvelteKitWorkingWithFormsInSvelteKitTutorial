import type { Actions, RequestEvent } from './$types';

export const actions: Actions = {
  registration: async (event: RequestEvent) => {
    // const formData1 = await event.request.formData();
    // console.log(`formData1: [${JSON.stringify(formData1, undefined, 2)}]`);

    const formData2 = Object.fromEntries(await event.request.formData());
    console.log(`formData2: [${JSON.stringify(formData2, undefined, 2)}]`);
  }
};
