function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537n;
    this.g = a4;
}
const v5 = new F2(6n);
try { v5(-65537n, Uint8Array); } catch (e) {}
const v9 = new Uint8Array(567);
for (const v10 of v9) {
    v9.length;
    for (let v12 = 0; v12 < 10; v12++) {
        const v14 = "p" + v12;
        v9[v14] = v14;
    }
}
gc();
