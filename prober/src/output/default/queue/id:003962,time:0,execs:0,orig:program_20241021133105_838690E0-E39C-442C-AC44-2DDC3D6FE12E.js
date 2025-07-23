const v1 = ["number","number","number"];
const v2 = ["number","number","number","number","number"];
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F3();
const v10 = new F3();
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = this.constructor;
    try { new v16(this, this); } catch (e) {}
    a14.c = a14;
    this.a = v1;
    this.d = v2;
}
new F11(v10, v9);
new F11(v9, "number");
new F11(v9, v10);
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
