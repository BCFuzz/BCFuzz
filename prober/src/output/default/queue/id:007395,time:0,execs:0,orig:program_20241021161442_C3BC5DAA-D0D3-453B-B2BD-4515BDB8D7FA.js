class C1 {
    #d = "2138772903";
}
const v2 = new C1();
const t4 = v2.constructor;
new t4("2138772903");
new C1();
class C6 extends C1 {
}
new C6();
function F8() {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(); } catch (e) {}
    C1.a = -4096;
}
new F8();
for (let v14 = 0; v14 < 250; v14++) {
    v14++;
    v14--;
}
gc();
