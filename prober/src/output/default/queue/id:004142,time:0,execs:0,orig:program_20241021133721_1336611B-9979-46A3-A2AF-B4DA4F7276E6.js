function f3(a4, a5, a6) {
    for (let i8 = (() => {
            function f7() {
                return f7;
            }
            return 0;
        })();
        (() => {
            switch (a5) {
                case 4:
                    break;
            }
            return i8 < 6;
        })();
        ) {
        f3(i8, f3);
    }
    return f3;
}
Uint8ClampedArray.toString = f3;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
