import { Plugin } from 'obsidian';
import { DEFAULT_DATA } from './defaultData';
import { LimelightData } from './LimelightData';

let plugin: Plugin | undefined;
let pluginData: Promise<Record<string, any>> | undefined = undefined;

export function initializeData(pluginValue: Plugin) {
    plugin = pluginValue;
    pluginData = plugin.loadData().then((rawData) => Object.assign({}, DEFAULT_DATA, rawData));
}

export function getData<TKey extends keyof LimelightData>(key: TKey): Promise<LimelightData[TKey]> {
    return pluginData!.then((data) => data[key]);
}

export function setData<TKey extends keyof LimelightData>(
    key: TKey,
    value: LimelightData[TKey]
): Promise<void> {
    return pluginData!.then((data) => {
        data[key] = value;
        return plugin!.saveData(data);
    });
}
