import {langConfig } from './Config/languageConfig.js'
import {toolboxConfig} from './Config/toolboxConfig.js'
import {quickReplaceConfig} from './Config/quickReplaceConfig.js'
import { darkTheme as darkThemeConfig } from './Config/Themes/darkTheme.js';
import { lightTheme as lightThemeConfig } from './Config/Themes/lightTheme.js';
import { colorfulTheme as colorfulThemeConfig } from './Config/Themes/colorfulTheme.js';
import { darkColorfulTheme as darkColorfulThemeConfig } from './Config/Themes/darkColorfulTheme.js';


export let config = {
    language: langConfig,
    toolbox: toolboxConfig,
    quickReplace: quickReplaceConfig,
    darkTheme: darkThemeConfig,
    lightTheme: lightThemeConfig,
    colorfulTheme: colorfulThemeConfig,
    darkColorfulTheme: darkColorfulThemeConfig,

};