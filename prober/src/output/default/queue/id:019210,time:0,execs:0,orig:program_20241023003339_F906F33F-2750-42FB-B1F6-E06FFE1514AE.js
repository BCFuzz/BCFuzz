for (const v2 of [NaN,-3.894744913592595e+306,-1000000.0,-5.0,-5.0,47629.17976254434,-593462.538077628,-4.541790808566222,-1.0076854646553485e+308]) {
    const v4 = new Uint8Array();
    for (let [i14, i15] = (() => {
            const v5 = [];
            const v6 = [5.0,0.15731719625813334];
            Object.defineProperty(v6, "shared", { configurable: true, enumerable: true, value: v4 });
            v6.maximum = 9;
            v6.minimum = v5;
            const t5 = this.WebAssembly.Memory;
            const v10 = new t5(v6);
            v10.buffer;
            return [0, 10];
        })();
        i15;
        i15--) {
    }
}
gc();
