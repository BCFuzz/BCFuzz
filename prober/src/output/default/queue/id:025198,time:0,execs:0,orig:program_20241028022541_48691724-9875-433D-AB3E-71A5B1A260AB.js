for (let [i29, i30] = (() => {
        const v3 = ([-2,9,-4096,65537,-844447654]).toLocaleString();
        for (let i6 = 0, i7 = 10;
            i6 < i7;
            (() => {
                i7--;
                const o24 = {
                    n(a13, a14, a15) {
                        const v16 = this;
                        const v18 = v16.Intl.DateTimeFormat;
                        function f19(a20) {
                            return v3;
                        }
                        v18[Symbol.toPrimitive] = f19;
                        v18.timeZone = v18;
                        return v18(a14, v18);
                    },
                };
                const v25 = o24.n;
                try { v25(); } catch (e) {}
            })()) {
        }
        return [0, 10];
    })();
    i29 != i30;
    i30--) {
}
gc();
