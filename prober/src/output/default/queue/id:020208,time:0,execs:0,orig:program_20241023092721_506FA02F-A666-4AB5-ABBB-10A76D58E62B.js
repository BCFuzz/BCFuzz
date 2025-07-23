const v0 = /e+/myiu;
function f2() {
    return f2;
}
class C3 extends f2 {
    constructor(a5, a6) {
        const v8 = new Int16Array(Array);
        Object.defineProperty(v8, "constructor", { enumerable: true, value: Array });
        const v9 = v8.constructor;
        super();
        class C12 extends v9 {
        }
        for (let i15 = 0, i16 = 10; i16--, i15 < i16;) {
        }
        const v23 = new C12();
        v23.c = v23;
        v23.callee = v0;
        const v24 = Date();
        const o25 = {
            [Math]: v24,
        };
        Object.defineProperty(o25, "toJSON", { writable: true, configurable: true, enumerable: true, value: v23 });
        JSON.stringify(o25);
    }
}
new C3();
gc();
