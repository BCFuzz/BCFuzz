function f2(a3, a4, a5) {
    for (let i8 = (() => {
            function f7() {
                return a4;
            }
            return 0;
        })();
        i8 < 6;
        ) {
        f2(i8, f2);
    }
}
Uint8ClampedArray.toString = f2;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
