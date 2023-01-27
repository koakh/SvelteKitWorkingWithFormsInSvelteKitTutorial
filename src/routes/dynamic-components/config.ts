import TabA from './components/TabA.svelte';
import TabB from './components/TabB.svelte';
import TabC from './components/TabC.svelte';
import Button from './components/Button.svelte';

export const tabsConfig = (setTab: (tab: typeof TabA | typeof TabB | typeof TabC) => void) => {
  return [
    {
      id: 1,
      component: Button,
      props: {
        label: 'Tab #A',
        clickHandle: () => setTab(TabA),
      },
    },
    {
      id: 2,
      component: Button,
      props: {
        label: 'Tab #B',
        clickHandle: () => setTab(TabB),
      },
    },
    {
      id: 3,
      component: Button,
      props: {
        label: 'Tab #C',
        clickHandle: () => setTab(TabC),
      },
    },
    {
      id: 4,
      component: Button,
      props: {
        label: 'Some Message',
        clickHandle: () => alert('Hello Joe'),
      },
    }
  ]  
}