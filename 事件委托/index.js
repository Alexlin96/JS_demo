(function(){
    var ulDom = document.getElementsByTagName('ul')[0];
        ulDom.addEventListener('click',(e)=>{ //事件委托
            const target = e.target;
            console.log('html',target.innerHTML)
        })  
})()
 