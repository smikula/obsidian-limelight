import { Setting } from 'obsidian';

export function createIntensitySetting(container: HTMLElement) {
    new Setting(container)
        .setName('Spotlight intensity')
        .setDesc('Controls how dim the inactive panes are relative to the spotlighted pane.')
        .addSlider((slider) =>
            slider
                .setValue(50) // TODO: use value from settings
                .onChange((value) => {
                    // TODO: save value to settings
                    console.log('Intensity changed to ', value);
                })
        );
}
