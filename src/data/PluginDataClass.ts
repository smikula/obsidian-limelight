import { Plugin } from 'obsidian';
import { DEFAULT_DATA } from './defaultData';
import { LimelightData, LimelightDataKey } from './LimelightData';

export class PluginData {
    private dataPromise: Promise<Record<LimelightDataKey, any>>;

    constructor(private plugin: Plugin) {
        this.dataPromise = plugin
            .loadData()
            .then((rawData) => Object.assign({}, DEFAULT_DATA, rawData));
    }

    getData<TKey extends LimelightDataKey>(key: TKey): Promise<LimelightData[TKey]> {
        return this.dataPromise.then((data) => data[key]);
    }

    setData<TKey extends LimelightDataKey>(key: TKey, value: LimelightData[TKey]): Promise<void> {
        return this.dataPromise.then((data) => {
            data[key] = value;
            return this.plugin.saveData(data);
        });
    }
}
