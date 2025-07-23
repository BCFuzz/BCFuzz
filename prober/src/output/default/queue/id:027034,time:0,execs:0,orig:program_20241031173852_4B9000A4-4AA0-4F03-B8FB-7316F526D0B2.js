function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 50; v3++) {
    }
    let v5;
    try {
    const t0 = true;
    v5 = t0();
    } catch (e) {}
    const v7 = v5 + "boolean";
    v7.localeCompare(v7.strike(v5, v7));
}
const v10 = new F0(F0);
const t13 = v10.constructor;
new t13();
new F0(F0);
gc();
