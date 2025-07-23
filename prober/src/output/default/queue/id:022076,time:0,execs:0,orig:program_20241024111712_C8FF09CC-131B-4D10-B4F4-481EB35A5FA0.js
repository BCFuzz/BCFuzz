function f2() {
    return 1073741824n;
}
function f3(a4) {
    1073741824n >>> -50024n;
    return f2;
}
f2[Symbol.species] = f3;
const v9 = new BigUint64Array();
v9.constructor = f2;
try { v9.subarray(f2, f2); } catch (e) {}
gc();
