import { Setting } from 'obsidian';
import { LimelightData } from 'src/data/LimelightData';

export function createIntensitySetting(container: HTMLElement, data: LimelightData) {
    new Setting(container)
        .setName('Spotlight intensity')
        .setDesc('Controls how dim the inactive panes are relative to the spotlighted pane.')
        .addSlider((slider) =>
            slider
                .setValue(data.getField('intensity')) // populate initial value from settings
                .onChange((value) => {
                    // Write new value to settings
                    data.setField('intensity', value);
                })
        );
}
