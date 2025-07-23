function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        const v6 = new Int16Array(a4, C1, C1);
        v6.constructor = f0;
        const v7 = v6.constructor;
        super();
        class C10 extends v7 {
        }
        const v11 = new C10();
        const v12 = Date(C1);
        const o13 = {
            [Math]: v12,
        };
        o13.h = o13;
        Object.defineProperty(o13, "toJSON", { writable: true, configurable: true, enumerable: true, value: v11 });
        JSON.stringify(o13);
    }
}
new C1(C1, f0);
gc();
