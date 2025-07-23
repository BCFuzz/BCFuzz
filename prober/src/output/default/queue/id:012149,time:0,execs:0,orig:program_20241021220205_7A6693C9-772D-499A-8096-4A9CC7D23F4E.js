function f0(a1, a2, a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        v4--;
        f0(a2);
    }
    return a2;
}
Uint8ClampedArray.toString = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
