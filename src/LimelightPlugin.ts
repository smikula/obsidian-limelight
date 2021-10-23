import { Plugin } from 'obsidian';
import { LimelightData } from './data/LimelightData';
import { LimelightSettingTab } from './settings/LimelightSettingTab';

export class LimelightPlugin extends Plugin {
    private data: LimelightData | undefined;

    getData() {
        if (!this.data) {
            throw new Error('Plugin data has not been initialized yet.');
        }

        return this.data;
    }

    async onload() {
        this.data = new LimelightData(this);
        this.addSettingTab(new LimelightSettingTab(this.app, this));
    }
}
