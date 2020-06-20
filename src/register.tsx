import React from 'react';
import addons, { types } from '@storybook/addons';
import { ADDON_ID, TOOL_ID, PANEL_ID } from './constants';
import { Tool } from './components/tool-bar';
import { DemoPanel } from './components/storybook-panel';
import { AddonPanel } from '@storybook/components';
// import { Preview } from './components';

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    render: () => <Tool api={api} />,
    title: 'Addon tool',
    type: types.TOOL,
  });

  addons.add(PANEL_ID, {
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <DemoPanel api={api} />
      </AddonPanel>
    ),
    title: 'Addon panel',
    type: types.PANEL,
  });

  // addons.add(PANEL_ID, {
  //   render: Preview as any,
  //   title: 'Addon Preview',
  //   type: types.PREVIEW,
  // });
});
