const v2 = new Uint8ClampedArray(12);
function f3() {
    return v2;
}
const v5 = new Uint8Array(Uint8Array);
function f6(a7, a8, a9, a10) {
    return v2;
}
f6[Symbol.species] = f3;
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    a15.constructor = f6;
    a15.slice();
}
new F13(v5);
gc();
