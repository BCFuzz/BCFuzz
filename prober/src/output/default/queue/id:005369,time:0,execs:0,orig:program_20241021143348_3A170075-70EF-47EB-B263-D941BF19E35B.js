function f1() {
    for (let v2 = 0; v2 < 25; v2++) {
        function f3() {
        }
        class C4 extends f3 {
        }
        const v5 = new C4();
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        const v16 = v5.constructor;
        try { v16.apply(); } catch (e) {}
        new Int32Array([1886715396,-2147483647,-65536,-65536,6,6,-2147483647]);
    }
    return Int32Array;
}
f1();
gc();
