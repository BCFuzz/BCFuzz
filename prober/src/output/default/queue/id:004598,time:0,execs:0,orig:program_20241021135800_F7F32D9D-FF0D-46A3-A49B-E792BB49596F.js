const v0 = /\x01wS/yvs;
const v1 = /\xed\xa0\x80/myu;
function f2(a3, a4) {
    try { b(); } catch (e) {}
    return b;
}
const v7 = [0.17409146259674568,-378223.2043310825,3.0,659894.4810797854,-Infinity];
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    a10[Symbol.toPrimitive] = f2;
    try { a10.test(a12); } catch (e) {}
}
new F8(v1);
const v18 = new F8(v0, v7, v1);
v18[Symbol.toPrimitive] = f2;
class C21 {
    constructor(a23, a24) {
        for (let v25 = 0; v25 < 32; v25++) {
            const v27 = "p" + v25;
            try { v27.padStart(v18); } catch (e) {}
        }
    }
}
new C21(C21, F8);
new C21();
const v31 = new C21();
new C21(v7, v31);
gc();
