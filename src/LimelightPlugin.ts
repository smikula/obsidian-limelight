import { Plugin } from 'obsidian';
import { LimelightSettingTab } from './LimelightSettingTab';

export class LimelightPlugin extends Plugin {
    async onload() {
        this.addSettingTab(new LimelightSettingTab(this.app, this));
    }
}
