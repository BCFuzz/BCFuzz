function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        const v6 = new Int16Array();
        const v7 = v6.constructor;
        super();
        class C10 extends v7 {
        }
        const v11 = new C10();
        const v12 = Date();
        const o13 = {
            [Math]: v12,
        };
        Object.defineProperty(o13, "toJSON", { writable: true, configurable: true, enumerable: true, value: v11 });
        JSON.stringify(o13);
    }
}
new C1(f0, C1);
gc();
