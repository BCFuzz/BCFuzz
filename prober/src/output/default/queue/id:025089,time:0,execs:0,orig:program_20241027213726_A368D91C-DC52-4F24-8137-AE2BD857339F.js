const v2 = new Int32Array(Int8Array);
const v3 = v2.constructor;
const v4 = new Int8Array(Int32Array);
function f5(a6, a7, a8, a9) {
    return a8;
}
f5[Symbol.species] = v3;
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    a14.constructor = f5;
    a14.slice();
}
new F12(v4);
gc();
