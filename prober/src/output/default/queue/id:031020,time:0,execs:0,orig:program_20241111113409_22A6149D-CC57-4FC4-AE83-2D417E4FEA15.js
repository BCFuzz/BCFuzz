function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let [i19, i20] = (() => {
        const v5 = delete v2.size;
        const v6 = `
            /\u{12345}/myvis;
            v5.constructor **= 1.7421332333300702e+308;
        `;
        const v9 = v6.split(v6[6]);
        v9.reverse(v5);
        try { v9.flatMap(runString); } catch (e) {}
        const v17 = createGlobalObject().WebAssembly.instantiate();
        v17.then(v17, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v21 = i19 != i20;
        let v22 = v21 && v21;
        v22--;
        return v22;
    })();
    ) {
}
gc();
