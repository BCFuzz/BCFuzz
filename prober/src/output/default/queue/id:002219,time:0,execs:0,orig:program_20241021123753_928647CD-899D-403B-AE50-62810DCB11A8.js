const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
    this.f = v0;
}
new F1();
new F1();
new F1();
class C6 extends F1 {
    #e;
    static c;
    static [-1] = F1;
    static 65537;
    static 41 = v0;
}
new C6();
const v8 = new C6();
new C6();
class C10 extends C6 {
}
new C10();
new C10();
Reflect.construct(C10, []);
[-128,-4294967297,v8];
gc();
