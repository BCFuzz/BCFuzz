function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.timeZone = "callee";
}
const v5 = new F1("callee", F1);
for (let i8 = 0, i9 = 10; i9; i9--) {
}
class C17 extends Date {
}
const v18 = new C17();
try { v18.toLocaleTimeString("object", v5); } catch (e) {}
gc();
