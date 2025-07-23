const v0 = [NaN,-3.894744913592595e+306,-1000000.0,-5.0,-5.0,47629.17976254434,-593462.538077628,-4.541790808566222,-1.0076854646553485e+308];
for (const v2 of v0) {
    const v4 = new Uint8Array(v0, v2, 9);
    for (let [i27, i28] = (() => {
            const v5 = [];
            const v6 = [5.0,0.15731719625813334];
            Object.defineProperty(v6, "shared", { configurable: true, enumerable: true, value: v4 });
            v6.maximum = 9;
            class C7 {
            }
            const v8 = new C7();
            async function f9(a10, a11, a12) {
                const o13 = {
                };
                const v15 = new Proxy(v8, o13);
                await v15;
                return f9;
            }
            f9(v2, v0, 9);
            eval();
            v6.minimum = v5;
            const t17 = this.WebAssembly.Memory;
            const v23 = new t17(v6);
            try { v23.grow(); } catch (e) {}
            return [0, 10];
        })();
        i28;
        i28--) {
    }
}
gc();
