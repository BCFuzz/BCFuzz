const v3 = new Proxy(SyntaxError, Reflect);
class C4 {
    constructor(a6, a7, a8, a9) {
        ([-0.4145484124155736,-4.879762798347718,-1.0228573659834205e+308,-0.0]).findLastIndex(v3);
        for (let v12 = 0; v12 < 5000; v12++) {
        }
    }
}
const v13 = new C4(C4, Reflect, SyntaxError, Reflect);
function f14() {
    return f14;
}
const v15 = [2744,-15826,53999,-4294967296,2147483648,536870889,-128,38977];
v15[93] >>>= f14;
const v16 = new C4(v15, v3, SyntaxError, v13);
const v17 = v16.constructor;
new v17(v16, v17, Reflect, SyntaxError);
gc();
