
let serviceWorkers = [
    {
        'url': '/sw.js',
        'name': 'Site'
    },
    {
        'url': 'https://cdn.oxi.cx/sw.js',
        'name': 'CDN'
    }];

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {

        for (let sw of serviceWorkers) {
            navigator.serviceWorker.register(sw.url).then((registration) => {
                // Registration was successful
                console.log(sw.name + ' SW registration successful. Scope: ', registration.scope);

            }, (err) => {
                // registration failed :(
                console.log(sw.name + ' SW registration failed. Error: ', err);
            });
        }

    });
}