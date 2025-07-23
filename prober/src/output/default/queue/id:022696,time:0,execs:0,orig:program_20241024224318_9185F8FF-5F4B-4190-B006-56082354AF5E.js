for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        const v8 = i4--;
        for (let i11 = 0, i12 = 10;
            i11 < i12;
            (() => {
                i12--;
                const o28 = {
                    n(a18, a19, a20) {
                        const v21 = this;
                        const v23 = v21.Intl.DateTimeFormat;
                        function f24() {
                            return "n";
                        }
                        function f25(a26) {
                            return a26;
                        }
                        Object.defineProperty(v23, "minute", { configurable: true, get: f24, set: f25 });
                        v23(a19, v23);
                        return i3;
                    },
                };
                const v29 = o28.n;
                try { v29("n", v8, "n", i3); } catch (e) {}
            })()) {
        }
    })()) {
}
gc();
