import { App, PluginSettingTab } from 'obsidian';
import { LimelightPlugin } from './LimelightPlugin';

export class LimelightSettingTab extends PluginSettingTab {
    constructor(app: App, plugin: LimelightPlugin) {
        super(app, plugin);
    }

    display() {
        // TODO
    }
}
