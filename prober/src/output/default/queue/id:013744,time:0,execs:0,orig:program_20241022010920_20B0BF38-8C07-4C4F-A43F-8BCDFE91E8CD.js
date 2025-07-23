function f1(a2, a3) {
    return a2;
}
f1[0] = 756691903n;
const v6 = new BigInt64Array(3);
const v7 = v6.sort();
try { v7.set(f1); } catch (e) {}
gc();
