const v1 = ("boolean").link();
for (let i4 = 0, i5 = 10; i5; i5--) {
}
function f11() {
    return v1;
}
class C12 extends f11 {
}
const v13 = new C12();
v13.year = v1;
class C16 extends Date {
}
const v17 = new C16();
try { v17.toLocaleTimeString("object", v13); } catch (e) {}
gc();
