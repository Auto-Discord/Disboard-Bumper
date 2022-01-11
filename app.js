const token = 'ABCDEFG'; // 토큰
const channel = '1234567'; // 채널 ID
const command = '!d bump'; // 명령어
const interval = 1000; // 주기 (단위: ms -> s*1000)
// -------------
const request = require("request");
const https = require("http");

setInterval(post, interval);

function post() {
    request.post(`https://discord.com/api/v9/channels/${channel}/messages`, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'content': command
        })
    }, (err, res, bodi) => {
        try {
            let body = JSON.parse(bodi);
            if (err) return console.error(err);
            if (body.id) {
                console.log('Bumper:', `Response code: ${res.statusCode} ${res.statusMessage}, Message ID: ${body.id}`);
            } else {
                console.log('Bumper:', 'Error occurred.', body?.message || bodi);
            }
        } catch (e) {}
    });
}
