function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a7;
    const t3 = "-1";
    t3.g = -150.7533160800216;
}
function f9(a10, a11, a12, a13) {
    return a13;
}
const v15 = new Float32Array();
const v16 = `
    const t11 = "-1";
    t11[536870912] = 0.7620725318956749 ** -1024;
    [2099814127,-2147483648,128,255,32586];
    [-256,-30177,6];
    [-9223372036854775807,-4294967297,1073741824,-4096,255];
    /\u{12345}/dyis;
`;
v16.replaceAll(v15, f9);
gc();
