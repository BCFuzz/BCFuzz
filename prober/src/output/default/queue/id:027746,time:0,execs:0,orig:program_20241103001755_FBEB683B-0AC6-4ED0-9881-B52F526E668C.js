for (let i2 = 0, i3 = 10;
    (() => {
        for (let i6 = 0, i7 = 10; i6 !== i7; i7--) {
        }
        const v16 = createGlobalObject().Float16Array;
        const v17 = [-1000000000000.0,1000000000000.0,1000000.0,3.0,861498.0722507937];
        const o19 = {
            get length() {
                Object.defineProperty(v17, "length", { configurable: true, enumerable: true, value: this });
                return this;
            },
        };
        try { new v16(o19); } catch (e) {}
        return i2 < i3;
    })();
    i3--) {
}
gc();
