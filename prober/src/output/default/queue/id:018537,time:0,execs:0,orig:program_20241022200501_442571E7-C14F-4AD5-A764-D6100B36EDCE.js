function f1() {
    return f1;
}
class C2 extends f1 {
    constructor(a4, a5) {
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        super();
        const v17 = Date();
        const o18 = {
            [Math]: v17,
            "maxByteLength": a4,
        };
        JSON.stringify(o18);
    }
}
new C2();
gc();
