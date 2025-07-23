const v0 = [];
function f1() {
    return f1;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.length = a5;
    this.h = a4;
    this.c = v0;
}
const v6 = new F2(v0, f1);
const v7 = new F2(v6, v6);
new F2(v6, v7);
const v11 = new Float64Array(257);
for (const v12 of v11) {
}
gc();
