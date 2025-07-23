for (let i4 = -3, i5 = 10; i5--, i4 < i5;) {
}
const v12 = `
    for (let v13 = 0; v13 < 5; v13++) {
    }
`;
const v14 = v12.split(8, 1.0);
const v15 = [-1.5747891354956815e+307,Infinity,0.3495536181340231,1000000000.0,-2.0,77.17885560188961,-1.7976931348623157e+308,0.1616773427113678,500.15110739247666];
function f16(a17, a18, a19) {
}
const v20 = f16();
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    try { a26.constructor(v14); } catch (e) {}
}
new F21(v15, f16, v20, F21);
gc();
