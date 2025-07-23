function f0(a1, a2, a3) {
    const o4 = {
    };
    return o4;
}
Uint8ClampedArray.toString = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
