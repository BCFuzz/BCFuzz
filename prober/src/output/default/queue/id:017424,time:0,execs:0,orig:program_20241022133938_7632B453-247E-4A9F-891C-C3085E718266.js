function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2();
function f7(a8, a9) {
    for (let v11 = 0; v11 < 92; v11++) {
        a9[undefined + v11];
    }
    return f7;
}
v6[Symbol.iterator] = f7;
const v17 = new Int8Array();
const v18 = v17.constructor;
try { new v18(v6); } catch (e) {}
gc();
