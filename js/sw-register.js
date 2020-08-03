
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {

        navigator.serviceWorker.register('/sw.js').then((registration) => {
            // Registration was successful
            console.log('Site SW registration successful. Scope: ', registration.scope);

            }, (err) => {
            // registration failed :(
            console.log('Site SW registration failed. Error: ', err);
        });
    });
}