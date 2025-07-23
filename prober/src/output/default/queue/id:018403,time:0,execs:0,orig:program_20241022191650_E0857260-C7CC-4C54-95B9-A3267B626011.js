const o33 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.Segmenter;
        const v7 = new v6(v6, v4, a3, a1, a3);
        function f8(a9, a10) {
            function F11() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = new F11();
            function f14() {
                for (let [i19, i20] = (() => {
                        gc();
                        return [0, 10];
                    })();
                    i19 < i20;
                    i20--) {
                }
                return a2;
            }
            Object.defineProperty(v13, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f14 });
            class C29 {
                static [v13] = v13;
            }
            return this;
        }
        const v31 = ([-1091105171,10,9223372036854775807,1073741824,536870887,750650855,268435456,10,46902]).sort(f8);
        v7.segment();
        return v31;
    },
};
const t31 = o33.n;
t31();
gc();
