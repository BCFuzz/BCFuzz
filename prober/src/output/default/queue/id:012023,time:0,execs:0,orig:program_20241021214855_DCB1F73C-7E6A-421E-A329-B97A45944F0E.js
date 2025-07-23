function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    ~5;
}
const v9 = new F4();
const v10 = new F4();
let v11 = undefined;
for (let v12 = 0; v12 < 100; v12++) {
    v9[v12] ||= v12;
    for (let v13 = 0; v13 < 32; v13++) {
        v2["p" + v13] = v13;
    }
    const v16 = [v12];
    const t16 = this.RangeError;
    t16(F0, v12);
    this.parseInt(v16);
}
v11 = v10;
gc();
