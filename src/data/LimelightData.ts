import { Plugin } from 'obsidian';
import { DEFAULT_DATA } from './defaultData';
import { DataSchema, DataSchemaKey } from './DataSchema';

export class LimelightData {
    private data: DataSchema | undefined;

    constructor(private plugin: Plugin) {}

    initialize(): Promise<void> {
        return this.plugin.loadData().then((rawData) => {
            this.data = Object.assign({}, DEFAULT_DATA, rawData);
        });
    }

    getField<TKey extends DataSchemaKey>(key: TKey): DataSchema[TKey] {
        this.validateInitialized();
        return this.data![key];
    }

    setField<TKey extends DataSchemaKey>(key: TKey, value: DataSchema[TKey]): Promise<void> {
        this.validateInitialized();
        this.data![key] = value;
        return this.plugin.saveData(this.data);
    }

    validateInitialized() {
        if (!this.data) {
            throw new Error('Plugin data is not initialized yet.');
        }
    }
}
