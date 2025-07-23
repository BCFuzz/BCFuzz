function f0() {
    const v2 = Int8Array.bind;
    let v3;
    try { v3 = new v2(); } catch (e) {}
    function f4(a5) {
        return f0;
    }
    class C6 extends f4 {
        static [v3];
    }
    for (let v7 = 0; v7 < 95; v7++) {
    }
    return Int8Array;
}
class C8 extends f0 {
}
new C8();
new C8();
gc();
