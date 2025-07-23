function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = true;
    delete this.d;
    this.e = true;
}
new F1();
const v5 = new F1();
class C6 extends F1 {
    c = v5;
    b;
}
const v7 = new C6();
v7.length = 3483;
new C6();
const v12 = new BigInt64Array(512);
for (const v13 in v12) {
}
gc();
