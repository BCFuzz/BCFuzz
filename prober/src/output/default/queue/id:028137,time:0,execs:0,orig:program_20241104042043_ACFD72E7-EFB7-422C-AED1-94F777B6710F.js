for (let i2 = 0, i3 = 7;
    i2 < i3;
    (() => {
        function f9(a10, a11, a12) {
            return a11;
        }
        const v13 = f9(Uint8ClampedArray, i2);
        for (let i16 = 0, i17 = 7; i2 < i17; i17--) {
            for (let v24 = 0; v24 < 5; v24++) {
                const v25 = [43319,256,-12,536870889,383344779,257];
                const v27 = [f9];
                const v28 = v25.flatMap;
                v28.apply(Int8Array, v27);
                Reflect.apply(v28, v13, v27);
            }
        }
        i3--;
    })()) {
}
gc();
