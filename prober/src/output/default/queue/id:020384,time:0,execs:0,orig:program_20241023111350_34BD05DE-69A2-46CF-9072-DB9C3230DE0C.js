const v2 = new Uint8Array(9, 9, 9);
for (let [i15, i16] = (() => {
        const v3 = [];
        const v4 = [5.0,0.15731719625813334];
        Object.defineProperty(v4, "shared", { configurable: true, enumerable: true, value: v2 });
        v4.maximum = 9;
        v4.minimum = v3;
        const v6 = this.WebAssembly;
        const t6 = v6.Memory;
        const v8 = new t6(v4);
        const v9 = v8.buffer;
        const v12 = v6;
        v12[Symbol.isConcatSpreadable] = v9;
        return [0, 10];
    })();
    i16;
    i16--) {
}
gc();
