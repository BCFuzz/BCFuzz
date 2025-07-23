function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    let v8 = "d";
    const v10 = `
        try {
        const t0 = -1000000000000.0;
        t0(v2, v10, v2);
        } catch (e) {}
        v8++;
    `;
    eval(v10);
    this.a = v2;
}
new F3(v2, F3, F3);
new F3();
gc();
