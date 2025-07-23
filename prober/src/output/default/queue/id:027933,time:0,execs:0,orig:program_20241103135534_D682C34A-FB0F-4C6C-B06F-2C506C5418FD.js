function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = [1000000000.0,5.0,1.7976931348623157e+308,1.510858453666195,-1e-15,929136.9843717425,0.5248786080243406,-9.524936997499932,0.3748531703597733];
        for (let i8 = 0, i9 = 10;
            i8 < i9;
            (() => {
                const v13 = i9--;
                const o24 = {
                    n(a15, a16, a17) {
                        const v18 = this;
                        const t4 = v18.Intl.DateTimeFormat;
                        const v21 = t4();
                        function f22() {
                            return v13;
                        }
                        v21.toString = f22;
                        let v23;
                        try { v23 = v21.formatRangeToParts(v21, v21); } catch (e) {}
                        return v23;
                    },
                };
                const t15 = o24.n;
                t15();
            })()) {
        }
        Object.defineProperty(v5.__proto__, 1, { enumerable: true, value: this });
    }
}
new F0(F0, F0);
gc();
