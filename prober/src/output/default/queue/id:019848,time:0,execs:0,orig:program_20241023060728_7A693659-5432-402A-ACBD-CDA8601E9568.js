function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
        super();
        const v17 = Date();
        const o18 = {
            [Math]: v17,
            "h": Math,
        };
        JSON.stringify(o18);
    }
}
new C1(C1, f0);
gc();
