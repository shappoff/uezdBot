const fetch = require('node-fetch');

const resultBotUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getUpdates`;

fetch(resultBotUrl)
    .then((r) => r.json())
    .then((ctx) => {
        for (const key in ctx) {
            console.log(key:"", key);
        }
        if (ctx.result) {
            ctx.result.forEach(({message}) => {
                if (message) {
                    const {
                        from,
                        message_id,
                        chat,
                        date,
                        text = '',
                    } = message;
                    const username = `${from.first_name ? from.first_name : ''} ${from.last_name ? from.last_name : ''} ${from.username ? from.username : ''}`.trim()

                    console.log(new Date( +`${date}000`).toDateString(), chat.username, message_id, `(${username})`, text);
                }
            });
        }
    });