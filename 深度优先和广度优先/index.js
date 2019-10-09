// 深度优先遍历dom节点
// 思路 遍历递归
function deepFn(node, nodeList=[]) {
    if(node){
        nodeList.push(node); // 存进数组
        var children = node.children;
        children.forEach((item)=>{
            deepFn(item,nodeList)   // 递归调用
        })
    }
    return nodeList;
}

// 广度优先遍历dom节点
// 循环

function wideFn(node,nodeList) {
    if(node){
        let stack =  [];
        stack.push(node);
        while(stack.length){
            let item = stack.shift(); // 删除头部
            nodeList.push(item);  // 添加进数组
            for(var i = 0 ;i< item.children.length;i++){
                stack.push(item.children[i])
            }
        }
    }
    return nodeList
}
