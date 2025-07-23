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
        let v11 = new C10();
        --v11;
        const v13 = Date();
        const o14 = {
            [Math]: v13,
        };
        Object.defineProperty(o14, "toJSON", { writable: true, configurable: true, enumerable: true, value: v11 });
        JSON.stringify(o14);
    }
}
new C1(f0, C1);
gc();
