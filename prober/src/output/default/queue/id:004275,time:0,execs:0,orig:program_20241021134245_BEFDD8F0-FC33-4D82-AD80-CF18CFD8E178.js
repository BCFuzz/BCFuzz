function f2(a3, a4, a5) {
    for (let i6 = 0;
        (() => {
            switch (a4) {
            }
            return i6 < 6;
        })();
        ) {
        f2();
    }
}
Uint8ClampedArray.toString = f2;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
