class C0 {
}
const v1 = new C0();
for (let v2 = 0; v2 < 1000; v2++) {
    v1["bigint" + v2] = v2;
}
gc();
