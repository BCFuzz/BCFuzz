for (const v1 of [NaN,-3.894744913592595e+306,-1000000.0,-5.0,-5.0,47629.17976254434,-593462.538077628,-4.541790808566222,-1.0076854646553485e+308]) {
    const v3 = new Uint8Array();
    for (let [i12, i13] = (() => {
            const v4 = [];
            const v5 = [5.0,0.15731719625813334];
            Object.defineProperty(v4, "shared", { configurable: true, enumerable: true, value: v3 });
            v5.minimum = v4;
            const t4 = this.WebAssembly.Memory;
            const v9 = new t4(v5);
            return [0, v9.buffer];
        })();
        i13;
        i13--) {
    }
}
gc();
