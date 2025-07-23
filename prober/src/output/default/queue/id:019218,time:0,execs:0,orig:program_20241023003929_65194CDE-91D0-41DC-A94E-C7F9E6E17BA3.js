const v0 = /e+/myiu;
function f2() {
    return v0;
}
class C3 extends f2 {
    constructor(a5, a6) {
        const v8 = new Int16Array();
        Object.defineProperty(v8, "constructor", { enumerable: true, value: Array });
        const v9 = v8.constructor;
        super();
        class C12 extends v9 {
        }
        const v13 = new C12();
        v13.toJSON = v0;
        const v14 = Date();
        const o15 = {
            [Math]: v14,
        };
        Object.defineProperty(o15, "toJSON", { writable: true, configurable: true, enumerable: true, value: v13 });
        JSON.stringify(o15);
    }
}
new C3(f2, v0);
gc();
