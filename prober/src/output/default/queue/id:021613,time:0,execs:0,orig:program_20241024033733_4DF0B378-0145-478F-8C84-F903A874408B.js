for (let i2 = -3, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        const v6 = new WeakMap();
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
            const v18 = new Uint8ClampedArray(i9);
            function f19() {
                return i3;
            }
            const t7 = [f19];
            t7.length <<= 14;
            v6.set(v18);
        }
        return v4;
    })();
    i3--) {
}
gc();
