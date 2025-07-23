for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    let v12 = this;
    for (let v15 = 0; v15 < 10; v15++) {
        const v17 = ("m")["indexOf"](a13);
        const v18 = v12--;
        try { v17(a14, a13, F11, "m"); } catch (e) {}
        for (let v20 = 0; v20 < 250; v20++) {
        }
        v18.toLocaleString(F11, a14, a14, F11);
    }
}
new F11();
gc();
