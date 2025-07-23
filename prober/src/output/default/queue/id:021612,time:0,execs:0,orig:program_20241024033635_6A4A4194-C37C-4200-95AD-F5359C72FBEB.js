function f1() {
    return f1;
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
        const v23 = Date(C2);
        const o24 = {
            [Math]: v23,
        };
        Object.defineProperty(o24, "toJSON", { writable: true, configurable: true, enumerable: true, value: v22 });
        for (let v25 = 0; v25 < 25; v25++) {
            const v28 = new Float32Array(v25, v8, v25);
            const t22 = v28.constructor;
            new t22(400731.68023042055);
        }
        JSON.stringify(o24);
    }
}
new C2();
gc();
