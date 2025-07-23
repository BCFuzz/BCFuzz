const v1 = new Uint32Array();
const v3 = new BigUint64Array();
const v4 = v3.constructor;
const v5 = new v4();
function f6(a7, a8, a9, a10) {
    return v5;
}
f6[Symbol.species] = v4;
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    a15.constructor = f6;
    a15.slice(a15);
}
const v20 = new F13(v5);
const v21 = v20.constructor;
try { new v21(v1); } catch (e) {}
gc();
