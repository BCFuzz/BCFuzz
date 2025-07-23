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
        const v18 = v16.pop().cause;
        let v19;
        try { v19 = v18(v0, v16); } catch (e) {}
        let v20;
        try { v20 = v18(v0, v19, a3); } catch (e) {}
        try { v18(v20, f1, v0, a3); } catch (e) {}
        const v23 = new Int8Array();
        const v25 = new Uint32Array();
        try { v25.map(); } catch (e) {}
        try { v25.toReversed(); } catch (e) {}
        let {...v28} = v25;
        if (v28 >= v23) {
        }
        return v25;
    }
    f1(v0, f1);
`;
const v32 = eval(v0);
v32.next(v32, eval, v32);
gc();
