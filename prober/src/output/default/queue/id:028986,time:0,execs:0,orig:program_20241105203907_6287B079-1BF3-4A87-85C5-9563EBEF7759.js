for (let v0 = 0; v0 < 5; v0++) {
    for (let i3 = 0, i4 = 10;
        (() => {
            const v5 = i3 !== i4;
            function f6() {
                const o9 = {
                    n() {
                        this.d = this;
                        delete this.c;
                        return f6;
                    },
                };
                o9.n(o9);
                o9.c = v0;
                return o9;
            }
            const v11 = f6();
            for (let v12 = 0; v12 < 25; v12++) {
            }
            v11.n();
            return v5;
        })();
        i4--) {
    }
}
gc();
