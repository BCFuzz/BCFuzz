function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        class C8 {
        }
        class C9 extends C8 {
        }
        Object.defineProperty(C8, 2, { value: NaN });
    }
    new F3(F1, this);
}
new F1();
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
const o22 = {
    10: 15,
};
this.constructor.getOwnPropertyNames(o22);
gc();
