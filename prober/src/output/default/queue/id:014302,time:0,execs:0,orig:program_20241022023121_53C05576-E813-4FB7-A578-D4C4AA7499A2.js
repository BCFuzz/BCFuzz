function f1(a2, a3, a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        switch (a3) {
            case a4:
                break;
        }
        f1(v5, f1);
    }
}
Uint8ClampedArray.toString = f1;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
