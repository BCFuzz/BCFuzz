function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let [i18, i19] = (() => {
        const v5 = delete v2.size;
        const v6 = `
            v5.constructor **= 1.7421332333300702e+308;
        `;
        const v8 = v6.split(v6[6]);
        v8.reverse();
        try { v8.flatMap(runString); } catch (e) {}
        const v14 = createGlobalObject();
        const v15 = v14.WebAssembly;
        const v16 = v15.instantiate(F0, v15, v14, F0, 1.7421332333300702e+308);
        v16.then(v16, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v20 = i18 != i19;
        let v21 = v20 && v20;
        v21--;
        return v21;
    })();
    ) {
}
gc();
