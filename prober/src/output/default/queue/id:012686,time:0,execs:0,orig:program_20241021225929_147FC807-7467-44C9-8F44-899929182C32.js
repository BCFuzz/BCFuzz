function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
for (let v4 = 0; v4 < 25; v4++) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = new Date();
        v8.setMilliseconds(Date);
        const v10 = v8.getUTCMinutes();
        class C11 {
        }
        new C11(F5, v3, v10);
    }
    new F5();
}
gc();
