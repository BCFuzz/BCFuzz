function f1() {
    return Uint16Array;
}
f1[Symbol.toPrimitive] = f1;
const v5 = new Uint8ClampedArray();
try { v5.subarray(f1); } catch (e) {}
gc();
