function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let [i18, i19] = (() => {
        const v5 = delete v2.c;
        const v6 = `
            v5.message -= 0.3957056581488504;
        `;
        const v8 = v6.split(v6[10]);
        v8.reverse();
        try { v8.flatMap(runString); } catch (e) {}
        const v15 = createGlobalObject().WebAssembly;
        const v16 = v15.instantiate(v2, createGlobalObject, F0, v5, v15);
        v16.then(v16, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v20 = i18 != i19;
        return v20 * v20;
    })();
    i19--) {
}
gc();
