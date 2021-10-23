import { Plugin } from 'obsidian';
import { DEFAULT_DATA } from './defaultData';
import { DataSchema, DataSchemaKey } from './DataSchema';

export class PluginData {
    private dataPromise: Promise<Record<DataSchemaKey, any>>;

    constructor(private plugin: Plugin) {
        this.dataPromise = plugin
            .loadData()
            .then((rawData) => Object.assign({}, DEFAULT_DATA, rawData));
    }

    getField<TKey extends DataSchemaKey>(key: TKey): Promise<DataSchema[TKey]> {
        return this.dataPromise.then((data) => data[key]);
    }

    setField<TKey extends DataSchemaKey>(key: TKey, value: DataSchema[TKey]): Promise<void> {
        return this.dataPromise.then((data) => {
            data[key] = value;
            return this.plugin.saveData(data);
        });
    }
}
