function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        const v9 = new BigUint64Array(1459);
        const v12 = new Int16Array(10);
        new Int16Array(...v12, ...v9);
    }
}
new C1(C1, C1, f0, f0);
gc();
