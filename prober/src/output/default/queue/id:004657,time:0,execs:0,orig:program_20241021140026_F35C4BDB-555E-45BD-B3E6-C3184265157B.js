function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 50; i++) {
        const v6 = ("valueOf").toLowerCase.apply;
        try { v6(); } catch (e) {}
        for (let v8 = 0; v8 < 10; v8++) {
        }
    }
}
const v9 = new F0(F0, F0);
const v10 = new F0(v9, F0);
new F0(v10, v9);
gc();
