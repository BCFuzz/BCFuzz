function f2(a3, a4) {
    a4[Symbol.replace] = -244.925527699265;
    return Uint32Array;
}
Uint32Array.valueOf = f2;
const v8 = new ArrayBuffer();
try { new Uint8ClampedArray(v8, Uint32Array); } catch (e) {}
gc();
