const v0 = `
    class C1 {
    }
    const v2 = new C1();
    async function f3(a4, a5, a6) {
        const o7 = {
        };
        const v9 = new Proxy(v2, o7);
        const v11 = Int8Array?.constructor;
        let v12;
        try { v12 = v11(v2, v9); } catch (e) {}
        for (let v13 = 0; v13 < 5; v13++) {
            const v15 = new Int32Array();
            try { v15.toSorted(v12); } catch (e) {}
        }
        let v17;
        try { v17 = v9.then(); } catch (e) {}
        for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
        }
        try { eval(v17); } catch (e) {}
        const v31 = (await v9).constructor;
        try { v31(); } catch (e) {}
        return v0;
    }
    f3();
`;
eval(v0);
gc();
