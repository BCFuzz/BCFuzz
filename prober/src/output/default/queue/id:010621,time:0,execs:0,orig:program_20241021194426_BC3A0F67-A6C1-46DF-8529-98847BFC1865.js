for (let v3 = 0; v3 < 32; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v6 = 0; v6 < 10; v6++) {
            new Float64Array(58766);
        }
        class C10 {
            constructor(a12, a13, a14) {
                function f15() {
                }
                a14 instanceof f15;
            }
        }
        new C10();
        new C10(-892.4644749279851, 2147483647, C10);
        this.h = F4;
    }
    const v19 = new F4();
    const t18 = v19.h;
    const v21 = new t18();
    const v22 = v21.__lookupGetter__;
    try { v22(); } catch (e) {}
}
gc();
