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
        const v17 = v16.pop();
        const v18 = v17.cause;
        let v19;
        try { v19 = v18(); } catch (e) {}
        let v20;
        try { v20 = v18(v17, v19, v18, v16); } catch (e) {}
        try { v18(v20, v0); } catch (e) {}
        const v23 = new Int8Array();
        const v25 = new Uint32Array();
        try { v25.values(); } catch (e) {}
        try { v25.sort(v17); } catch (e) {}
        let {...v28} = v25;
        if (!(v28 >= v23)) {
        }
    }
    f1(f1, f1);
`;
eval(v0).next();
gc();
