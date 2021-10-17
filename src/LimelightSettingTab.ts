import { App, PluginSettingTab, Setting } from 'obsidian';
import { LimelightPlugin } from './LimelightPlugin';
import { LimelightSettings } from './LimelightSettings';

export class LimelightSettingTab extends PluginSettingTab {
    constructor(app: App, plugin: LimelightPlugin, private settings: LimelightSettings) {
        super(app, plugin);
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();
        new Setting(containerEl)
            .setName('Show spotlight glare')
            .setDesc(
                'Show a lighter strip of illumination on the left edge of the active pane. (Intended for dark mode only.)'
            )
            .addToggle((toggle) =>
                toggle
                    .setValue(this.settings.data.glare) // initial value
                    .onChange(async (value) => {
                        this.settings.data.glare = value;
                        await this.settings.save();
                        console.log('Glare changed to ', value, this.settings);
                    })
            );
    }
}
