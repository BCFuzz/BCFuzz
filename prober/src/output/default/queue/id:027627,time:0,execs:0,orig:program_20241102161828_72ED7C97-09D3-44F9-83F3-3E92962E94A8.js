function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
v2.toString = f0;
BigInt64Array[2] = v2;
const v6 = new Float64Array(7);
try { v6.set(BigInt64Array); } catch (e) {}
gc();
