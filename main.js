import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

const clipboard = new ClipboardJS('.copy-btn', {
    text: function () {
        let htmlBlock = document.querySelector('#nlm-employee-email-sig');
        return htmlBlock.innerHTML;
    }
});

// clipboard.on('success', function (e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);

//     e.clearSelection();
// });

// clipboard.on('error', function (e) {
//     console.error('Action:', e.action);
//     console.error('Trigger:', e.trigger);
// });