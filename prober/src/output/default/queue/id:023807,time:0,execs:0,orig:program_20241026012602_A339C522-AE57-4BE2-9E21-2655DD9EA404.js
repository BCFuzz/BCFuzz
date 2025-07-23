const v2 = new Uint8Array(9);
const v4 = new Int32Array();
const v5 = v4.constructor;
const v6 = new v5(Int32Array);
function f7(a8, a9, a10, a11) {
    return a9;
}
f7[Symbol.species] = v5;
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    a16.constructor = f7;
    a16.slice(a18, a18, a16, f7, a16);
}
const v21 = new F14(v6);
const t14 = v21.constructor;
new t14(v2);
gc();
