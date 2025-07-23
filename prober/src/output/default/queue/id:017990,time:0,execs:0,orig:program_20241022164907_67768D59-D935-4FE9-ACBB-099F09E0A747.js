function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        const v5 = C1.constructor;
        super();
        class C8 extends v5 {
        }
        let v9 = new C8();
        --v9;
        const v11 = Date();
        const o12 = {
            [Math]: v11,
        };
        Object.defineProperty(o12, "toJSON", { writable: true, configurable: true, enumerable: true, value: v9 });
        JSON.stringify(o12);
    }
}
new C1(C1, f0);
gc();
