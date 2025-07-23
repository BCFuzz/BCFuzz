class C2 {
}
const v3 = new C2();
const v4 = new C2();
const v5 = new C2();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.valueOf(this, v4, a9, a10);
    a10.length;
}
new F6("-1430", C2, v5);
new F6(v3, "m", "m");
const v15 = new F6(v4, "m", "-1430");
const v16 = v15.constructor;
v16.prototype = v16;
new v16(v5, "-1430", v3);
gc();
