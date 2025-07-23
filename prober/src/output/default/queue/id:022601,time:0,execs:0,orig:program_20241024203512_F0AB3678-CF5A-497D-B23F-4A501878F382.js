function f1(a2) {
    return a2;
}
f1.toISOString = BigUint64Array;
const v4 = new Date();
const v5 = v4.toJSON;
try { v5.call(f1); } catch (e) {}
gc();
