function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
        for (let v12 = 0; v12 < 10; v12++) {
            try { new Promise(); } catch (e) {}
        }
    }
}
const v15 = new F0();
const t9 = v15.constructor;
new t9();
gc();
