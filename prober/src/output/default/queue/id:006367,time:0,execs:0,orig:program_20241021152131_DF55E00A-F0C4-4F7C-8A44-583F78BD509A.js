for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
    }
    class C2 extends f1 {
    }
    const v3 = new C2();
    for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
    }
    const v14 = v3.constructor;
    try { v14.m(C2, v0, v0); } catch (e) {}
}
gc();
