function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a4;
    this.d = a4;
    this.b = a4;
}
const v5 = new F2(Date);
const v6 = new F2(true);
const v7 = new F2();
[v7,v6,v5];
const v11 = new Uint32Array(1000);
for (const v12 in v11) {
}
gc();
