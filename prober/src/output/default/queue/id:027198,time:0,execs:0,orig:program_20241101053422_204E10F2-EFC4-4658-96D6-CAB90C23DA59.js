for (let v1 = 0; v1 < 5; v1++) {
    for (let i4 = 0, i5 = 10;
        (() => {
            const v6 = i4 !== i5;
            function f7() {
                const o10 = {
                    [v6]: -1024,
                    n() {
                        delete this.c;
                        return this;
                    },
                };
                return o10;
            }
            const v11 = f7();
            const v12 = f7();
            function f13(a14, a15) {
                try { a14.n(); } catch (e) {}
                Object.defineProperty(a15, "c", { enumerable: true, value: a15 });
                const v19 = new Int16Array(88);
                for (const v20 in v19) {
                }
                return a15.n();
            }
            f13(f13(v11, v12), v12);
            return v6;
        })();
        i5--) {
    }
}
gc();
