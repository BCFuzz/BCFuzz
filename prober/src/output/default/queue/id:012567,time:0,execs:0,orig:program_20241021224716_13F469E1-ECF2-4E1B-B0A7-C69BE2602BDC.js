const v1 = new Uint32Array();
const t1 = v1.constructor;
const v3 = new t1();
function f4(a5, a6, a7, a8) {
    a7[1];
    return v1;
}
f4[Symbol.species] = f4;
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    a14.constructor = f4;
    try { a14.slice(); } catch (e) {}
}
new F12(v3);
gc();
