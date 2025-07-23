const v2 = new Uint8Array();
for (let [i12, i13] = (() => {
        const v3 = [];
        const v4 = [5.0,0.15731719625813334];
        Object.defineProperty(v4, "shared", { configurable: true, enumerable: true, value: v2 });
        v4.maximum = 9;
        v4.minimum = v3;
        const t5 = this.WebAssembly.Memory;
        const v8 = new t5(v4);
        v8.grow(v2);
        return [0, 10];
    })();
    i13;
    i13--) {
}
gc();
