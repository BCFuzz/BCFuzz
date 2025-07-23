const v2 = new Uint8Array(9);
for (let [i15, i16] = (() => {
        const v3 = [];
        const v4 = [5.0,0.15731719625813334];
        Object.defineProperty(v4, "shared", { configurable: true, enumerable: true, value: v2 });
        v4.maximum = 9;
        let v5 = 0;
        v5++;
        v4.minimum = v3;
        const t7 = this.WebAssembly.Memory;
        const v10 = new t7(v4);
        v10.buffer;
        v10.grow(v5);
        return [0, 10];
    })();
    i16;
    i16--) {
}
gc();
