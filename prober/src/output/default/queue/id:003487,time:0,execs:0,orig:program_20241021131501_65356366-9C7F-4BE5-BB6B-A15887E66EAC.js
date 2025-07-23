class C2 {
    [1000000.0] = 9007199254740992;
}
const v3 = new C2();
function f5(a6, a7, a8, a9) {
    v3[a7];
    return a6;
}
f5();
for (let v13 = 0; v13 < 100; v13++) {
    f5("1073741824", 1073741825);
}
gc();
