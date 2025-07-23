function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = [];
const v3 = new C1();
const v4 = /a{0,1}?/mdygiu;
v3.toLocaleString().replace(v4, v2);
gc();
