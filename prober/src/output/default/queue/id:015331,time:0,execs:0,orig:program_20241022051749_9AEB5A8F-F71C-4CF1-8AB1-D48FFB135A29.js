for (let v0 = 0; v0 < 250; v0++) {
    function f1() {
        return v0;
    }
    class C2 extends f1 {
    }
    C2.d = C2;
    for (const v3 in C2) {
        C2[v3];
    }
}
gc();
