const v0 = `
    async function* f1(a2, a3) {
        for (let [i8, i9] = (() => {
                let v5 = 0;
                v5++;
                return [v5, 10];
            })();
            i8 < i9;
            i9--) {
        }
        const v16 = [BigInt64Array];
        const v17 = v16?.fill;
        try { v17(v17, v17); } catch (e) {}
        const v20 = v16.pop().cause;
        let v21;
        try { v21 = v20(); } catch (e) {}
        let v22;
        try { v22 = v20(); } catch (e) {}
        let v23;
        try { v23 = v20(v22, BigInt64Array); } catch (e) {}
        const v25 = new Uint32Array(a2, v23, v21);
        try { v25.sort(); } catch (e) {}
        try { v25.values(); } catch (e) {}
        try { v25.sort(); } catch (e) {}
        let {...v29} = v25;
        return v21;
    }
    f1();
`;
eval(v0).next();
gc();
