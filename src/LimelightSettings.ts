import { Plugin } from 'obsidian';

interface LimelightData {
    glare: boolean;
}

const DEFAULT_DATA: LimelightData = {
    glare: true,
};

export async function createSettings(plugin: Plugin) {
    const data = Object.assign({}, DEFAULT_DATA, await plugin.loadData());
    return new LimelightSettings(data, plugin);
}

export class LimelightSettings {
    constructor(public data: LimelightData, private plugin: Plugin) {}

    save() {
        return this.plugin.saveData(this.data);
    }
}
