const v1 = new Float64Array();
for (let v2 = 0; v2 < 5; v2++) {
    for (let i5 = 0, i6 = 10;
        (() => {
            const v7 = i5 !== i6;
            function f8() {
                const o12 = {
                    n() {
                        class C10 {
                        }
                        delete this.c;
                        return v1;
                    },
                };
                o12.c = v7;
                return o12;
            }
            const v13 = f8();
            const v14 = f8();
            v14.d = v14;
            function f15(a16, a17) {
                try { a16.n(a17, f15); } catch (e) {}
                Object.defineProperty(a17, "c", { enumerable: true, value: v1 });
                const v21 = new Int16Array(88);
                for (const v22 in v21) {
                }
                a17.n();
            }
            f15(f15(v13, v14), v14);
            return v7;
        })();
        (() => {
            for (let i30 = 0, i31 = 10; i31--, i30 < i31;) {
            }
            i6--;
        })()) {
    }
}
gc();
