function f1() {
    return Array;
}
class C2 extends f1 {
    constructor(a4, a5) {
        const v7 = new Int16Array();
        Object.defineProperty(v7, "constructor", { enumerable: true, value: Array });
        const v8 = v7.constructor;
        super();
        class C11 extends v8 {
            77;
        }
        for (let i14 = 0, i15 = 10; i15--, i14 < i15;) {
        }
        const v22 = new C11();
        const v23 = Date(a4);
        const o24 = {
            [Math]: v23,
        };
        Object.defineProperty(o24, "toJSON", { writable: true, configurable: true, enumerable: true, value: v22 });
        JSON.stringify(o24);
    }
}
new C2(f1, C2);
gc();
