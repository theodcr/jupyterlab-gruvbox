import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the Gruvbox Theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@theodcr/jupyterlab-gruvbox:plugin',
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = '@theodcr/jupyterlab-gruvbox/index.css';

    manager.register({
      name: 'JupyterLab Gruvbox',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
