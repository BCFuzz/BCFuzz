function f1(a2, a3, a4) {
    Math.random();
    for (let v7 = 0; v7 < 5; v7++) {
        f1();
    }
    return Uint8ClampedArray;
}
Uint8ClampedArray.toString = f1;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
