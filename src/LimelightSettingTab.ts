import { App, PluginSettingTab, Setting } from 'obsidian';
import { LimelightPlugin } from './LimelightPlugin';

export class LimelightSettingTab extends PluginSettingTab {
    constructor(app: App, plugin: LimelightPlugin) {
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
                    .setValue(true) // TODO: use value from settings
                    .onChange(async (value) => {
                        // TODO: save value to settings
                        console.log('Glare changed to ', value);
                    })
            );
    }
}
