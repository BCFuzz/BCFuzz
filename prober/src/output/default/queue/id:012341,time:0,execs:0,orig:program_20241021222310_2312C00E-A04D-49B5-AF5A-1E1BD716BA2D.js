function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
for (let v4 = 0; v4 < 25; v4++) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = new Date(v4);
        const v9 = v8.getUTCMinutes();
        class C10 {
        }
        new C10(F5, v3, v9);
    }
    new F5();
}
gc();
