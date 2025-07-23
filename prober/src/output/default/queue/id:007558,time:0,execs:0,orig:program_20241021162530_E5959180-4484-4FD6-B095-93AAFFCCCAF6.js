function f0(a1, a2) {
    return f0;
}
const v5 = new BigInt64Array(3);
const v6 = v5.sort();
try { v6.set(f0); } catch (e) {}
gc();
