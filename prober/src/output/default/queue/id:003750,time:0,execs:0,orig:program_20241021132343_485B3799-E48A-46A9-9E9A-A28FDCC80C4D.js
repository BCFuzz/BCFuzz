function f0(a1, a2, a3) {
    for (let i6 = (() => {
            function f5() {
                return a3;
            }
            return 0;
        })();
        i6 < 6;
        ) {
        f0(a2, a3, i6);
    }
}
Uint8ClampedArray.valueOf = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
