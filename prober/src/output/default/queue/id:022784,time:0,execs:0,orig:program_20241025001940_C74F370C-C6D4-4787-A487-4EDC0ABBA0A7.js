const v1 = `
    async function* f2(a3, a4) {
        for (let [i8, i9] = (() => {
                switch (-4294967297) {
                }
                return [0, 10];
            })();
            i8 < i9;
            i9--) {
        }
        const v18 = ([BigInt64Array]).pop().cause;
        try { v18(); } catch (e) {}
        try { v18(); } catch (e) {}
        try { v18(); } catch (e) {}
        const v23 = new Int8Array();
        const v25 = new Uint32Array();
        try { v25.values(); } catch (e) {}
        try { v25.sort(); } catch (e) {}
        let {...v28} = v25;
        if (!(v28 <= v23)) {
        }
        return v1;
    }
    f2(f2, v1);
`;
eval(v1).next();
gc();
