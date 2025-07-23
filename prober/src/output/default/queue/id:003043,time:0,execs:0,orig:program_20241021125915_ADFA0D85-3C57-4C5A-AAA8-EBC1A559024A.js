function f0() {
    const o2 = {
        ..."f",
    };
    return o2;
}
for (let v3 = 0; v3 < 10; v3++) {
    class C4 extends f0 {
        129 = v3;
    }
    new C4();
}
gc();
