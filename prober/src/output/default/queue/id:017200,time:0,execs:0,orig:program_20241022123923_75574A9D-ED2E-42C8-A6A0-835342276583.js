function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v2 = new F0();
const v3 = v2--;
const o12 = {
    n(a5, a6, a7) {
        const v8 = this;
        const v10 = v8.Intl.DateTimeFormat;
        v10.calendar = v3;
        return v10(a6, v10);
    },
};
const v13 = o12.n;
v13(F0, v2, v13);
gc();
