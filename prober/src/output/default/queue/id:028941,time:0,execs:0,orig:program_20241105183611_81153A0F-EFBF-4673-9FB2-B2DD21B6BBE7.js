for (let v1 = 0; v1 < 5; v1++) {
    for (let i4 = 0, i5 = 10;
        (() => {
            const v6 = i4 !== i5;
            function f7() {
                const o9 = {
                    [v6]: -1024,
                    n() {
                        this.e = this;
                        return this;
                    },
                };
                return o9;
            }
            const v10 = f7();
            const v11 = f7();
            const v12 = v10.n();
            Object.defineProperty(v11, "c", { enumerable: true, value: v11 });
            const v13 = v11.n(-1024, v6, v12, -1024, -1024);
            v13.n(v10, -1024, v13, v6, v1);
            return v6;
        })();
        i5--) {
    }
}
gc();
