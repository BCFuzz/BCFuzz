function f0() {
    const o1 = {
    };
    return o1;
}
class C2 {
}
C2.toString = f0;
const v5 = new Int8Array(C2, 2001, 2001);
try { v5.subarray(2001, C2); } catch (e) {}
gc();
