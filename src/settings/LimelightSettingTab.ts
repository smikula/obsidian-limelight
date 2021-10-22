import { App, Plugin, PluginSettingTab } from 'obsidian';
import { createIntensitySetting } from './createIntensitySetting';

export class LimelightSettingTab extends PluginSettingTab {
    constructor(app: App, plugin: Plugin) {
        super(app, plugin);
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();
        createIntensitySetting(containerEl);
    }
}
