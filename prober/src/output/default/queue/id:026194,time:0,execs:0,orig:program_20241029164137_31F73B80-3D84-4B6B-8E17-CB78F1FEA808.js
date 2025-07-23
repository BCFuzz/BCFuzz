function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = this.constructor;
    try { new v2(); } catch (e) {}
}
const v4 = new F0();
for (let v5 = 0; v5 < 100; v5++) {
    for (let v6 = 0; v6 < 25; v6++) {
        v4["p" + v5] = v5;
    }
}
gc();
