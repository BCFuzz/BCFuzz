class C3 {
    #d = 1.7976931348623157e+308;
}
const v4 = new C3();
new C3(2);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a11;
    this.h = a8;
}
new F6(v4, C3);
const v16 = new Uint16Array(3578);
for (const v17 of v16) {
}
gc();
