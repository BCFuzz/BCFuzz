const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
function f2(a3, a4, a5, a6) {
    return f2;
}
f2[Symbol.species] = f2;
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    a11.constructor = f2;
    try { a11.slice(); } catch (e) {}
}
new F9(v1);
gc();
