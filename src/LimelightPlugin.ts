import { Plugin } from 'obsidian';
import { createSettings, LimelightSettings } from './LimelightSettings';
import { LimelightSettingTab } from './LimelightSettingTab';

export class LimelightPlugin extends Plugin {
    private settings: LimelightSettings | undefined;

    async onload() {
        this.settings = await createSettings(this);
        this.addSettingTab(new LimelightSettingTab(this.app, this, this.settings));
    }
}
