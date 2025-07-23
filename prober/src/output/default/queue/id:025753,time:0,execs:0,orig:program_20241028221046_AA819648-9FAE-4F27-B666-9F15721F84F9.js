const v1 = new Float64Array();
for (let v2 = 0; v2 < 5; v2++) {
    for (let i5 = 0, i6 = 10;
        (() => {
            const v7 = i5 !== i6;
            function f8() {
                const o11 = {
                    n() {
                        delete this.c;
                        return this;
                    },
                };
                o11.c = v2;
                return o11;
            }
            const v12 = f8();
            const v13 = f8();
            function f14(a15, a16) {
                Object.defineProperty(a16, "c", { enumerable: true, value: v1 });
                a16.n();
                return v2;
            }
            f14(f14(v12, v13), v13);
            return v7;
        })();
        i6--) {
    }
}
gc();
