function f0(a1, a2, a3) {
    for (let i6 = (() => {
            function f5() {
                return a2;
            }
            return 0;
        })();
        i6 < 6;
        ) {
        f0(i6, f0, f0);
    }
    return f0;
}
Uint8ClampedArray.toString = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
