function f0(a1, a2, a3) {
    const o4 = {
    };
    const v5 = o4 !== a1;
    Math.imul(2147483647 / v5, v5);
    for (let v10 = 0; v10 < 5; v10++) {
        f0();
    }
    return f0;
}
Uint8ClampedArray.valueOf = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
