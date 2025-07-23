class C0 {
    static {
        for (let i3 = 0; i3 < 1; i3++) {
            let v9 = "setFloat32";
            const o13 = {
                n(a11, a12) {
                    v9 = this;
                    return i3;
                },
            };
            function f14(a15, a16) {
                a15.n();
                const o20 = {
                    get a() {
                        return this.n();
                    },
                    ...v9,
                };
                return o20;
            }
            f14(f14(o13));
        }
    }
}
gc();
