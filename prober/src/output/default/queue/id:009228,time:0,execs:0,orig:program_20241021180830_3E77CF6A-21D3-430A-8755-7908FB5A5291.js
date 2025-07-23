for (let v0 = 0; v0 < 125; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 {
            #b = -39747;
        }
        const v8 = new C7();
        v8.b = -39747;
        v8.b;
    }
    new F1();
}
gc();
