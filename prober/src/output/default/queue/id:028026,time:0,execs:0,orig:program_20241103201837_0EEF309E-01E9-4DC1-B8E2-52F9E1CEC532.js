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
                        const v21 = t4(v4, i8, F0);
                        function f22() {
                            return v13;
                        }
                        v21.toString = f22;
                        v21.formatRangeToParts(v21, v21);
                        return f22;
                    },
                };
                const t14 = o24.n;
                t14();
            })()) {
        }
        const v29 = v5.__proto__;
        function f30() {
            return F0;
        }
        function f31(a32) {
            return this;
        }
        Object.defineProperty(v29, 0, { configurable: true, get: f30, set: f31 });
    }
}
new F0(F0, F0);
gc();
