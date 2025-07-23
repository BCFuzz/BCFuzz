for (let v0 = 0; v0 < 100; v0++) {
    const v2 = [0.2625477294791636];
    function f3(a4) {
        class C5 extends a4 {
        }
        return f3;
    }
    v2.constructor = f3;
    const v6 = v2.constructor;
    try { v6("-9007199254740991"); } catch (e) {}
}
gc();
