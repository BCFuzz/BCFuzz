class C0 {
}
const v1 = new C0();
for (let v2 = 0; v2 < 250; v2++) {
    for (let i = 0; i < 5; i++) {
    }
    v1["bigint" + v2] = v2;
}
gc();
