function f0() {
    const o1 = {
    };
    o1[Symbol.iterator] = f0;
    return o1;
}
const v4 = f0();
try { new BigUint64Array(v4); } catch (e) {}
gc();
