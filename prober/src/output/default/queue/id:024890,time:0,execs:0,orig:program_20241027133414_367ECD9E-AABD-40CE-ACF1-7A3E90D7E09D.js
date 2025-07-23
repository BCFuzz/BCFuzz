const o6 = {
    toString(a2, a3) {
        class C4 {
        }
        class C5 extends C4 {
        }
        Object.defineProperty(C4, 6, { configurable: true, value: -13 });
    },
};
-o6;
function F8() {
    if (!new.target) { throw 'must be called with new'; }
    for (let [i15, i16] = (() => {
            const o12 = {
            };
            o12.constructor.freeze(this);
            return [0, 10];
        })();
        i16--, i15 < i16;
        (() => {
            const o21 = {
                ...this,
            };
        })()) {
        for (let i26 = 0, i27 = 10; i26 != i27; i27--) {
        }
    }
}
new F8();
gc();
