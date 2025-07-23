const v2 = new Uint8Array(8, 8, 8);
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
for (let i15 = 0, i16 = 10;
    (() => {
        for (let [i26, i27] = (() => {
                const v17 = [];
                const v18 = [5.0,0.15731719625813334];
                Object.defineProperty(v18, "shared", { configurable: true, enumerable: true, value: v2 });
                v18.maximum = i15;
                v18.minimum = v17;
                const t5 = this.WebAssembly.Memory;
                const v22 = new t5(v18);
                try { v22.grow(8); } catch (e) {}
                return [0, 10];
            })();
            i27;
            i27--) {
        }
        return i15 < i16;
    })();
    i16--) {
}
gc();
