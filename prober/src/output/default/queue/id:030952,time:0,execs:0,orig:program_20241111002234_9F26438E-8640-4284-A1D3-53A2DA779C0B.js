function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let [i18, i19] = (() => {
        const v5 = delete v2.c;
        const v6 = `
            v5.a += -1000000000.0;
        `;
        const v8 = v6.split(v6[6]);
        v8.reverse();
        try { v8.flatMap(runString); } catch (e) {}
        const v16 = createGlobalObject().WebAssembly.instantiate(v2, v5, v2, -1000000000.0, createGlobalObject);
        v16.then(v16, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v20 = i18 != i19;
        return v20 && v20;
    })();
    i19--) {
}
gc();
