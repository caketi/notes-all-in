require("http").createServer((inRequest, inResponse) => {

    const requestModule = require("request");
    requestModule(
        "http://worldtimeapi.org/api/timezone/Asia/Shanghai",
        function (inErr, inResp, inBody) {
            inResponse.end(
                `Hello caketi : ${inBody}`
            );    
        }
    );
}  
).listen(8888);