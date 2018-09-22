const emptyObj = {1:{},2:{}}
for (let key in emptyObj)
    for (let key2 in emptyObj[key]) console.log(key2)