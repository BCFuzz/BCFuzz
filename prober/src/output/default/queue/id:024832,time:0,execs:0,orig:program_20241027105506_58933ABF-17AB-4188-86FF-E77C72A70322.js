class C1 extends Set {
}
const v2 = new C1();
function f3(a4, a5, a6) {
    a4.add(a6);
    const v8 = a4.delete();
    for (let i = 0; i < 25; i++) {
    }
    return v8;
}
for (let v9 = 0; v9 < 5; v9++) {
    f3(v2);
}
gc();
