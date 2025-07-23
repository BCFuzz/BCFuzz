function f2(a3, a4, a5) {
    for (let v6 = 0; v6 < 5; v6++) {
        switch (v6) {
            case 4:
                break;
        }
        f2(a5, a4, v6);
    }
    return a3;
}
Uint8ClampedArray.toString = f2;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
