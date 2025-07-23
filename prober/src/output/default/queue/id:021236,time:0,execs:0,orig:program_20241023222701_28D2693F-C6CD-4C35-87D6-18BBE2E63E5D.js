class C1 {
}
const v2 = new C1(65537, C1);
new C1(v2);
for (let v4 = 0; v4 < 250; v4++) {
    (v4 % 65537) % -16;
}
gc();
