class C1 {
    #d = "2138772903";
}
new C1();
const v3 = new C1();
try { v3.constructor(); } catch (e) {}
new C1();
class C6 extends C1 {
}
new C6();
function F8() {
    if (!new.target) { throw 'must be called with new'; }
    C1.a = -4096;
}
new F8();
for (let v12 = 0; v12 < 250; v12++) {
    v12++;
    v12--;
}
gc();
