/*
 * @Autor: alexlin
 * @Date: 2020-07-02 18:03:28
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-07-02 18:04:57
 * @Description: 简单爬虫
 */

let http = require("http");
let cheerio = require("cheerio");
let fs = require("fs");
http.get("http://www.yyxxgame.com/", function (res) {
  var data = "";
  res.on("data", function (chunk) {
    data += chunk;
  });
  res.on("end", function () {
    var $ = cheerio.load(data);
    console.log("$", $("img"));
    var str = "";
    $("img").each(function (index, ele) {
      str += "<img src=" + $(ele).attr("src") + ">" + "\n";
    });
    fs.writeFile("message.json", str);
  });
});
