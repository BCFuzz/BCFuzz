function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C8 {
        }
        class C9 extends C8 {
        }
        Object.defineProperty(C8, 2, { value: NaN });
        (1.7976931348623157e+308).toString().link();
    }
    new F2(F0, F0);
}
new F0();
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
