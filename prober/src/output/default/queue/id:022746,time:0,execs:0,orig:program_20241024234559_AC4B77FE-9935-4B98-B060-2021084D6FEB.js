class C0 {
    static n(a2, a3, a4, a5) {
        const v8 = new Uint32Array(1000);
        for (const v9 in v8) {
            function f10(a11, a12, a13, a14) {
                const o18 = {
                    set b(a17) {
                    },
                };
                o18.b = o18;
                for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                }
                return arguments;
            }
            f10(f10, this, v9, v8);
        }
    }
}
C0.n(C0, C0, C0, C0);
gc();
