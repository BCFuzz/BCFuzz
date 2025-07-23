for (let v0 = 0; v0 < 5; v0++) {
    for (let i3 = 0, i4 = 10;
        (() => {
            const v5 = i3 !== i4;
            function f7() {
                const o10 = {
                    "c": null,
                    n() {
                        return delete this.c;
                    },
                };
                return o10;
            }
            const v11 = f7();
            const v12 = f7();
            function f13(a14, a15) {
                a15.n(a15);
                return v0;
            }
            f13(f13(v11, v12), v12);
            for (let v19 = 0; v19 < 5; v19++) {
            }
            return v5;
        })();
        i4--) {
    }
}
gc();
