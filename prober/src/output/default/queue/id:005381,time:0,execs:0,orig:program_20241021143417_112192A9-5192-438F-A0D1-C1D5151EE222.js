function f0(a1, a2, a3) {
    for (let i5 = 0;
        i5 < 6;
        (() => {
            const v10 = Symbol.toPrimitive;
            const o12 = {
                [v10]() {
                    return i5;
                },
            };
        })()) {
        f0();
    }
    return f0;
}
Uint8ClampedArray.valueOf = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
