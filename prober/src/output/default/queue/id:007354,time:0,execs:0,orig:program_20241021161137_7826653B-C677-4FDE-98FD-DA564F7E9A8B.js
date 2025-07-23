function f1(a2, a3, a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        function f6(a7, a8) {
            const o9 = {
                "h": v5,
            };
            return a4;
        }
        f1(f6, a3, f1);
    }
    return a3;
}
Uint8ClampedArray.toString = f1;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
