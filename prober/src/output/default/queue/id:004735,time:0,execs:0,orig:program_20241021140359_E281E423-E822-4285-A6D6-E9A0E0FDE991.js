function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5, a6, a7) {
        const o8 = {
            __proto__: this,
        };
        const v9 = o8.WeakRef;
        try { new v9(255); } catch (e) {}
        return F1;
    }
    f3(f3, f3, F1, F1);
}
new F1();
gc();
