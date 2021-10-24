import { App, PluginSettingTab } from 'obsidian';
import { LimelightData } from 'src/data/LimelightData';
import { LimelightPlugin } from 'src/LimelightPlugin';
import { createIntensitySetting } from './intensitySetting';

export class LimelightSettingTab extends PluginSettingTab {
    private data: LimelightData;

    constructor(app: App, plugin: LimelightPlugin) {
        super(app, plugin);
        this.data = plugin.getData();
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();
        createIntensitySetting(containerEl, this.data);
    }
}
