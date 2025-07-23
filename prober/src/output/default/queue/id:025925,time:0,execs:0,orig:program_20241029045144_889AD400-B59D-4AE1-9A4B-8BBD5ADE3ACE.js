const v1 = new Float64Array(Float64Array);
for (let v2 = 0; v2 < 5; v2++) {
    for (let i5 = 0, i6 = 10;
        (() => {
            const v7 = i5 !== i6;
            function f8() {
                const o11 = {
                    n() {
                        delete this.c;
                        return v1;
                    },
                };
                o11.c = v2;
                return o11;
            }
            const v12 = f8();
            for (let v13 = 0; v13 < 25; v13++) {
            }
            const v14 = f8();
            function f15(a16, a17) {
                Object.defineProperty(a17, "c", { enumerable: true, value: v1 });
                a17.n();
                return v12;
            }
            f15(f15(v12, v14), v14);
            return v7;
        })();
        i6--) {
    }
}
gc();
