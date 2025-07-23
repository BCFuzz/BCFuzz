function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
[v3,v2,F0];
class C6 {
}
const v7 = new C6();
class C8 extends C6 {
    static #b = v7;
    #p(a10, a11) {
    }
    #e;
    static #d = "-12";
}
new C8();
new C8();
gc();
