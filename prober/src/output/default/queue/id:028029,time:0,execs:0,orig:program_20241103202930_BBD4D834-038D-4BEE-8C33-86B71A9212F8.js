for (let i2 = -3, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        const v6 = new WeakMap();
        const v8 = Symbol.toPrimitive;
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
            const v20 = new Uint8ClampedArray(i11, i12, i2);
            v6.set(v20).set(v8, WeakMap);
        }
        return v4;
    })();
    i3--) {
}
gc();
