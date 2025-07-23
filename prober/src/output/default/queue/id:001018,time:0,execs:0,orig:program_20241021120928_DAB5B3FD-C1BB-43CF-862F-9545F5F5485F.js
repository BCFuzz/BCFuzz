const v2 = new Float64Array();
const v3 = v2.constructor;
try { new v3(-202679339n); } catch (e) {}
const o10 = {
    m() {
        let v7 = 1000000.0;
        const v8 = v7++;
        Math.round(v8, v8);
        return -202679339n;
    },
};
o10.m();
class C12 {
    constructor() {
        this.__lookupGetter__.call(-202679339n);
    }
}
new C12();
gc();
