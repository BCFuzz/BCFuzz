for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        class C3 {
        }
        const v4 = new C3();
        const v5 = v4.toLocaleString(v4, v4, v4, F1);
        v5.split(v5, v0);
    }
    new F1();
}
gc();
