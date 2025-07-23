class C0 {
    m(a2, a3) {
        [a2] = a2;
    }
}
const v4 = new C0();
for (let v5 = 0; v5 < 10; v5++) {
    function f6(a7, a8) {
        v4["m"]();
    }
    try { f6(); } catch (e) {}
}
gc();
