const v0 = [4,4,-6,-11,10000,-4294967297];
function f1() {
    v0[Symbol.iterator] = f1;
    return v0;
}
f1();
try { new BigUint64Array(v0); } catch (e) {}
gc();
