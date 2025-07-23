const v0 = `
    async function f1(a2, a3) {
        const v5 = this?.String;
        try { v5(); } catch (e) {}
        const v7 = this.WebAssembly;
        const v8 = v7?.instantiate;
        try { new v8(v8, f1, f1, v0); } catch (e) {}
        const v10 = v7.Memory;
        try { v10(v0, f1); } catch (e) {}
        for (let i14 = 0, i15 = 10; i14 != i15; i15--) {
        }
        function f22(a23) {
            return a2;
        }
        try { f22(v8); } catch (e) {}
        return v0;
    }
    f1();
    /\u{12345}/myvis;
`;
eval(v0);
gc();
