(()=> {
    const getWithPath = (arr, path) => {
        const rexpArrFullPath = /(\[(\d+)\])+/;
        const rexpArrIndex = /\[(\d+)\]/g;
        const arrPath = path.split('.');

        return arrPath.reduce((obj, step) => {
            if (rexpArrFullPath.test(step)) {
                const propName = step.replace(rexpArrFullPath, '');
                const tArr = obj[propName];
                const matchIndexes = step.matchAll(rexpArrIndex);
                const arrIndex = Array.from(matchIndexes, m => m[1]);
                return arrIndex.reduce((arr, index) => { 
                    return arr[index];
                }, tArr)
            } else {
                return obj[step];
            }
        }, arr);
    }

    const cat = { body: { paws: [[{ type: 'top right' }]]}};

    const propertyPath = 'body.paws[0][0].type';

    return getWithPath(cat, propertyPath);
    // 'top right'
})()