function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 25; v2++) {
        for (let i5 = -3, i6 = 10; i5 < i6; i6--) {
        }
        class C13 {
        }
        delete C13.length;
        const v15 = new C13();
        const v16 = v15.constructor;
        v16.bind(F0, F0, v16, F0);
    }
}
new F0();
gc();
