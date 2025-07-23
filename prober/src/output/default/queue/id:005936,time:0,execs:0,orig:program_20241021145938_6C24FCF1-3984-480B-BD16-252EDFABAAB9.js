function f0() {
    return f0;
}
const v1 = [-1000000000.0,-4.0,-932448.2901097151,-497866.232080959,-9.239342115547702,1000000000.0];
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v1;
    this.b = f0;
}
const v7 = new F2(f0, F2, F2);
function F8() {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F8();
const v11 = v10.g;
for (const v12 in v7) {
    let v13;
    try { v13 = v11(); } catch (e) {}
    Math.ceil(v13);
    +v13;
    Math.log(v13);
    Math.asinh(10);
}
for (let v20 = 0; v20 < 250; v20++) {
}
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
