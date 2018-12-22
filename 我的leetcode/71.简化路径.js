var simplifyPath = function(path) {
    var result = '';
    var tempPath = [];
    var paths = path.split('/');
    paths.map(val => {
        if(val && val === '..') {
            tempPath.pop()
        }else if(val && val !== '.') {
            tempPath.push(val)
        }
    });
    tempPath.length ? result = '/'+tempPath.join('/') : result = '/';
    return result;
};