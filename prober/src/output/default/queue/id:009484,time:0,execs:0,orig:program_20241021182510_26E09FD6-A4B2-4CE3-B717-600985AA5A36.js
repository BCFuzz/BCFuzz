function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 {
        }
        class C8 extends C7 {
        }
        Object.defineProperty(C7, 2, { value: NaN });
    }
    new F2(this, F2);
}
new F0();
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
const o25 = {
    [7]: 0.0,
    n(a24) {
        return a24;
    },
};
const v27 = this.constructor;
v27.getOwnPropertyNames(o25);
v27.entries(v27);
gc();
