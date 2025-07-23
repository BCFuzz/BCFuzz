function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    createGlobalObject();
}
new F1();
const o15 = {
    n(a9, a10, a11) {
        const v12 = this;
        v12.Intl.RelativeTimeFormat;
    },
};
const v16 = o15.n;
const v17 = v16();
const v19 = new Int32Array(v16, v17, v17);
([o15,o15,o15]).copyWithin(v19);
gc();
