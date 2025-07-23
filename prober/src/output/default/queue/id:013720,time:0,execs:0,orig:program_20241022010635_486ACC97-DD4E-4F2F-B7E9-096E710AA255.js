const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
function f2(a3, a4, a5, a6) {
    a5[1];
    return v1;
}
f2[Symbol.species] = f2;
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a12.constructor = f2;
    try { a12.slice(F10, f2); } catch (e) {}
}
new F10(v1);
gc();
