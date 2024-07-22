import langConfig  from './LangConfig.json' assert {type: 'json'}
import {toolboxConfig} from './ToolboxConfig.js'
import  quickReplaceConfig from './quickReplaceConfig.json' assert {type: 'json'}
import  darkThemeConfig from './Themes/darkTheme.json' assert {type: 'json'}
import  lightThemeConfig  from './Themes/lightTheme.json' assert {type: 'json'}
import  colorfulThemeConfig  from './Themes/colorfulTheme.json' assert {type: 'json'}
import  darkColorfulThemeConfig from './Themes/darkColorfulTheme.json' assert {type: 'json'}

export let config = {
  language: langConfig,
  toolbox: toolboxConfig,
  quickReplace: quickReplaceConfig,
  darkTheme: darkThemeConfig,
  lightTheme: lightThemeConfig,
  colorfulTheme: colorfulThemeConfig,
  darkColorfulTheme: darkColorfulThemeConfig,

};