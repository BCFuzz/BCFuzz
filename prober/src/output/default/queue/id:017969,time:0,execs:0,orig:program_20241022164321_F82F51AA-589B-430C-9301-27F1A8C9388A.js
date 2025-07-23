function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    let v2 = this;
    for (let v5 = 0; v5 < 10; v5++) {
        const v7 = ("m")["indexOf"](a3);
        const v8 = v2--;
        try { v7(F1, v8); } catch (e) {}
        for (let v10 = 0; v10 < 250; v10++) {
        }
    }
}
new F1(F1, F1);
gc();
