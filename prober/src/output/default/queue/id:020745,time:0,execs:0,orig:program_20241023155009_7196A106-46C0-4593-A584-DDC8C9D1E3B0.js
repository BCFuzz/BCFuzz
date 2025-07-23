for (let i2 = -3, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        const v6 = new WeakMap();
        for (let i9 = 0, i10 = 10;
            i9 < i10;
            (() => {
                const v16 = v6[Symbol.toPrimitive];
                try { v16(); } catch (e) {}
                i10--;
            })()) {
            const v22 = new Uint8ClampedArray(i10, i2);
            v6.set(v22);
        }
        return v4;
    })();
    i3--) {
}
gc();
