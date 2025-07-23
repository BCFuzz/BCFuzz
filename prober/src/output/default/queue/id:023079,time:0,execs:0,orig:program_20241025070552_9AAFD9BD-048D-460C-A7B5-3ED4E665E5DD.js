function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let [i7, i8] = (() => {
            const o4 = {
            };
            o4.constructor.freeze(this);
            return [0, 10];
        })();
        i8--, i7 < i8;
        (() => {
            const o13 = {
                ...this,
            };
        })()) {
    }
}
new F0();
gc();
