"use strict";

if (config.history.layout.message_list_reverse) $('body').addClass('echo-live-history-message-list-reverse');
if (config.history.layout.message_item_reverse) $('body').addClass('echo-live-history-message-item-reverse');
if (!config.history.layout.display_username) $('body').addClass('echo-live-history-disable-username');
if (!config.history.layout.display_time) $('body').addClass('echo-live-history-disable-time');
if (config.history.message.latest_message_hide) $('body').addClass('echo-live-history-latest-message-hide');

let echoLiveHistory = new EchoLiveHistory(config);
echoLiveHistory.theme = extensionManager.themes();
let urlTheme = EchoLiveTools.getUrlParam('theme');
echoLiveHistory.setTheme(urlTheme || config.history.style.history_theme || config.global.theme);

echoLiveHistory.on('newHistory', function(e) {
    sendHistory(e.username, e.message);
});

echoLiveHistory.on('shutdown', function(reason) {
    $('body').removeClass('echo-live-history-latest-message-hide');

    if (reason != undefined && reason != '') {
        sendHistory($t( 'echolive.system_message' ), $t( 'echolive.shutdown_reason', { reason: reason } ));
    } else {
        sendHistory($t( 'echolive.system_message' ), $t( 'echolive.shutdown' ));
    }
});

function sendHistory(username = '', message = '') {
    if (username == '' || username == undefined) username = $t('message_preview.empty_username');
    if (message == '' || message == undefined) message = $t('message_preview.empty_message');

    username = username.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/  /g, '&nbsp; ');
    message = EchoLiveTools.getMessagePlainText(message);

    function __getTime() {
        let d = new Date();
        return `${__afterZero(d.getHours())}:${__afterZero(d.getMinutes())}:${__afterZero(d.getSeconds())}`;
    }

    function __afterZero(value) {
        if (value >= 10) {
            return `${value}`;
        } else {
            return `0${value}`;
        }
    }

    $('#echo-live-history-message-list').append(
        `<div class="history-message-item">
            <div class="username"><div class="content">${EchoLiveTools.safeHTML(username)}</div></div>
            <div class="message"><div class="content echo-output" data-before="${message.substring(0, 1).replace(/"/g, '&quot;')}">${EchoLiveTools.safeHTML(message)}</div></div>
            <div class="time"><div class="content">${__getTime()}</div></div>
        </div>`
    );

    if (config.history.message_list_reverse) {
        $('#echo-live-history-message-list').scrollTop(-4503599627370496);
    } else {
        $('#echo-live-history-message-list').scrollTop(4503599627370496);
    }
}