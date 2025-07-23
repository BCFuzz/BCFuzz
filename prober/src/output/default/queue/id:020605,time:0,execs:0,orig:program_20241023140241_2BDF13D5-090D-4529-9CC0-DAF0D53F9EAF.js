function f1(a2) {
    return [61260,6,9,256];
}
Uint8Array[Symbol.toPrimitive] = f1;
const v7 = new Uint8Array(4096);
try { v7.lastIndexOf(Uint8Array, Uint8Array); } catch (e) {}
gc();
