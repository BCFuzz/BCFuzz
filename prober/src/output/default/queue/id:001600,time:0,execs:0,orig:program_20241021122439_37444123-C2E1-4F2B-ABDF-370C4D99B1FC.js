function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -3;
}
new F0();
new F0();
new F0();
[-1000000000000.0];
class C15 extends Date {
}
const v16 = new C15();
class C19 {
    static 175 = "split";
}
class C21 extends C19 {
}
new C21(v16);
new C21();
class C24 extends C19 {
}
for (let v25 = 0; v25 < 500; v25++) {
    v25++;
    v25--;
}
gc();
