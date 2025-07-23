let o31 = {
    toString(a2, a3, a4, a5) {
        function f6() {
            return f6;
        }
        class C7 extends f6 {
        }
        function f8() {
            const v11 = new Uint16Array(129);
            for (let i13 = 0, i14 = 8n; i13 < i14;) {
                createGlobalObject().Atomics.store(v11, i13, i14);
            }
            return Uint16Array;
        }
        C7.toString = f8;
        const v24 = new C7();
        const t16 = v24.constructor;
        const v26 = t16();
        const v27 = new C7();
        const v28 = v27.constructor;
        const v29 = v28();
        try { v28(v29, v26, C7); } catch (e) {}
        return a2;
    },
};
o31++;
gc();
