for (let v0 = 0; v0 < 5; v0++) {
}
class C2 {
    #d = "2138772903";
}
const v3 = new C2();
const t6 = v3.constructor;
new t6(v3);
const v6 = v3.constructor;
new v6(v6);
class C8 extends C2 {
}
new C8();
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(this, this, F10); } catch (e) {}
    C2.a = -4096;
}
new F10();
for (let v16 = 0; v16 < 250; v16++) {
    v16++;
    v16--;
}
gc();
