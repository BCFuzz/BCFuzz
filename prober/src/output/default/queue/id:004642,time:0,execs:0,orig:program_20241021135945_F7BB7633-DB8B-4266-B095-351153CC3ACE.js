function f3() {
    return Float32Array;
}
Uint32Array[Symbol.toPrimitive] = f3;
const v6 = new Uint32Array();
try { v6.copyWithin(957, Uint32Array); } catch (e) {}
gc();
