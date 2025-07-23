function f1() {
    return 255;
}
const v4 = new Int32Array(2726);
function f5() {
    return 2726;
}
f5[Symbol.toPrimitive] = f1;
class C8 {
    constructor(a10, a11) {
        delete v4[f5];
    }
}
const v18 = eval(([[-2.220446049250313e-16,C8]]).toLocaleString());
try { new v18(); } catch (e) {}
gc();
