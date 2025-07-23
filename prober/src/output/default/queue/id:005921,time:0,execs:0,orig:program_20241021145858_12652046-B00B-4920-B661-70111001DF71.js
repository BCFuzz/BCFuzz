function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        super();
        const v5 = [-14,-10,-26073];
        v5[2] = v5;
        for (let v6 = 0; v6 < 250; v6++) {
        }
    }
}
new C1(C1, C1);
new C1();
gc();
