function f0() {
}
class C1 extends f0 {
    constructor(a3, a4) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
        super();
        const v17 = Date(a4);
        const o18 = {
            [Math]: v17,
            [a3]: this,
        };
        JSON.stringify(o18);
    }
}
new C1(f0);
gc();
