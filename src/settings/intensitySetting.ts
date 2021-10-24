import { Setting } from 'obsidian';
import { LimelightData } from 'src/data/LimelightData';

export function createIntensitySetting(container: HTMLElement, data: LimelightData) {
    new Setting(container)
        .setName('Spotlight intensity')
        .setDesc('Controls how dim the inactive panes are relative to the spotlighted pane.')
        .addSlider((slider) => {
            slider
                .setValue(data.getField('intensity')) // populate initial value from settings
                .onChange((value) => {
                    // Write new value to settings
                    data.setField('intensity', value);

                    // Apply the new value to the UI
                    applyIntensity(value);
                });
        });
}

export function initializeIntensity(data: LimelightData) {
    // Apply the initial value to the UI
    applyIntensity(data.getField('intensity'));
}

function applyIntensity(intensity: number) {
    // Opacity ranges from 0.1 - 0.9, with MORE intense having a LOWER opacity
    // value (i.e. the other panes appear dimmer because the spotlight is so
    // bright).
    const opacity = 0.9 - 0.8 * (intensity / 100);
    document.body.style.setProperty('--limelight-opacity', opacity.toString());
}
