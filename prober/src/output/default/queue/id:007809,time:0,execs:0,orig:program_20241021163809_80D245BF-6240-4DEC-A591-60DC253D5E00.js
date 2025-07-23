function f0(a1, a2, a3) {
    Math.log2(a3);
    for (let v6 = 0; v6 < 5; v6++) {
        f0(v6, f0, f0);
    }
    return a3;
}
Uint8ClampedArray.toString = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
