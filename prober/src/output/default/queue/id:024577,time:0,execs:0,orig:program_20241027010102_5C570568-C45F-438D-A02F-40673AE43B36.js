for (let v0 = 0; v0 < 5; v0++) {
    for (let i3 = 0, i4 = 10;
        (() => {
            const v5 = i3 !== i4;
            function f6() {
                const o9 = {
                    n() {
                        return delete this.c;
                    },
                };
                return o9;
            }
            const v10 = f6();
            const v11 = f6();
            function f12(a13, a14) {
                a14.c = a14;
                return a14.n();
            }
            f12(f12(v10, v11), v11);
            return v5;
        })();
        i4--) {
    }
}
gc();
