for (let v0 = 0; v0 < 5; v0++) {
}
class C1 {
}
const v2 = new C1();
const v3 = new C1();
v3.__proto__ = v2;
for (let v4 = 0; v4 < 250; v4++) {
    v4++;
    v4--;
}
gc();
