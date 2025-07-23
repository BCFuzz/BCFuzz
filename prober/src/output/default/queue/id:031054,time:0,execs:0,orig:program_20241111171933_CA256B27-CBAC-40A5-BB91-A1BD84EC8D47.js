function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let [i33, i34] = (() => {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
        const v15 = delete v2.c;
        const v16 = `
            const o21 = {
                toString(a18, a19) {
                    /\u{12345}/myvis;
                    return a18;
                },
            };
            v15.toStringTag <<= -1000000000.0;
        `;
        const v23 = v16.split(v16[6]);
        const v24 = v23.reverse();
        try { v23.flatMap(runString); } catch (e) {}
        const v29 = createGlobalObject();
        const v31 = v29.WebAssembly.instantiate(v24, v29);
        v31.then(v31, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        for (let i37 = 0, i38 = 2520; i38; i38--) {
        }
        const v44 = i33 != i34;
        return v44 && v44;
    })();
    i34--) {
}
gc();
