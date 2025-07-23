class C0 {
}
const v1 = new C0();
v1[0] = v1;
function f3(a4, a5, a6, a7) {
    return v1[a5];
}
f3();
for (let v11 = 0; v11 < 100; v11++) {
    f3("1073741824", 1073741825);
}
gc();
