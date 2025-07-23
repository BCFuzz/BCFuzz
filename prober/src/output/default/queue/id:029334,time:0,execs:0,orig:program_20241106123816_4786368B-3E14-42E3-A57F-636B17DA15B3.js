for (const v1 of [NaN,-3.894744913592595e+306,-1000000.0,-5.0,-5.0,47629.17976254434,-593462.538077628,-4.541790808566222,-1.0076854646553485e+308]) {
    for (let [i24, i25] = (() => {
            const v2 = [];
            const v3 = [5.0,0.15731719625813334];
            class C4 {
            }
            const v5 = new C4();
            async function f6(a7, a8, a9) {
                const o10 = {
                };
                const v12 = new Proxy(v5, o10);
                await v12;
                return a7;
            }
            f6();
            eval(v1);
            v3.minimum = v2;
            const v19 = this.WebAssembly.Memory;
            new v19(v3);
            const v21 = new v19(v3);
            v21.d = v21;
            return [0, 10];
        })();
        i25;
        i25--) {
    }
}
gc();
