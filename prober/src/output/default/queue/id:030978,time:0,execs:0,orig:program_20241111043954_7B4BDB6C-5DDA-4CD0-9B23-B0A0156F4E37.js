const v0 = [1e-15,-1000000000.0,-127.55346946176167,129366.38737398735,-1.0,1.0];
for (let [i21, i22] = (() => {
        const v3 = delete v0.c;
        const v4 = `
            const o9 = {
                toString(a6, a7) {
                    /\u{12345}/myvis;
                    return this;
                },
            };
            v3.b >>= -1000000000.0;
        `;
        const v11 = v4.split(v4[6]);
        v11.reverse();
        try { v11.flatMap(runString); } catch (e) {}
        const v18 = createGlobalObject().WebAssembly;
        const v19 = v18.instantiate(v18, -1000000000.0, -1000000000.0, v0, v18);
        v19.then(v19, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v23 = i21 != i22;
        return v23 && v23;
    })();
    i22--) {
}
for (let i33 = 0, i34 = 10 + 10; i34--, i34;) {
}
gc();
