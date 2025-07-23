function f0(a1, a2, a3) {
    const v6 = new Uint8ClampedArray(a1);
    const v8 = new Float32Array();
    return v6.fill("getOwnPropertyNames", v8, Uint8ClampedArray);
}
Uint8ClampedArray.valueOf = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
