// node 服务端
// 处理成功失败返回格式的工具
const { successBody } = require("../utli");
class CrossDomain {
  static async jsonp(ctx) {
    // 前端传过来的参数
    const query = ctx.request.query;
    // 设置一个cookies
    ctx.cookies.set("tokenId", "1");
    // query.cb是前后端约定的方法名字，其实就是后端返回一个直接执行的方法给前端，由于前端是用script标签发起的请求，所以返回了这个方法后相当于立马执行，并且把要返回的数据放在方法的参数里。
    ctx.body = `${query.cb}(${JSON.stringify(
      successBody({ msg: query.msg }, "success")
    )})`;
  }
}
module.exports = CrossDomain;
