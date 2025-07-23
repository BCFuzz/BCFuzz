const v2 = new Uint8Array(Uint8Array);
function f3(a4, a5, a6, a7) {
    return a5;
}
f3[Symbol.species] = Uint16Array;
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a12.constructor = f3;
    a12.slice();
}
new F10(v2);
gc();
