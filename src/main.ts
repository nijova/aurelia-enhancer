import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(aurelia: Aurelia) {
    aurelia.use
        .defaultBindingLanguage()
        .defaultResources()
        .developmentLogging()
        .globalResources(PLATFORM.moduleName('example'));
    await aurelia.start();
    await aurelia.enhance(document.querySelector('example'));
}
