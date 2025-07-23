function f1() {
    return f1;
}
class C2 extends f1 {
    constructor(a4, a5) {
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        super();
        const v18 = Date(C2);
        const o19 = {
            [Math]: v18,
            [a4]: this,
        };
        JSON.stringify(o19);
    }
}
new C2(1.2093619141426493e+308);
gc();
