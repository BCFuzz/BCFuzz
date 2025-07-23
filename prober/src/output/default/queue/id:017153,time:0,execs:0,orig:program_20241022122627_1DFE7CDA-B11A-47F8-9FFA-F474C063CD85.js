function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 10; v5++) {
        const v7 = ("m")["indexOf"](a3, a4);
        try { v7(v7); } catch (e) {}
        for (let v9 = 0; v9 < 250; v9++) {
        }
    }
}
new F1(F1, F1);
gc();
