const v0 = /((\xed\xa0\x80))\x02q9abc/dygis;
function f1(a2, a3, a4, a5) {
    return a3;
}
class C6 {
    constructor(a8, a9, a10, a11) {
        delete a9[f1 || a10];
    }
}
const v14 = C6.__defineSetter__;
const v15 = new C6(v0, v0);
const t11 = v15.constructor;
new t11(C6, v14);
gc();
