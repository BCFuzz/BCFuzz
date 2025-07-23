function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C7 extends F0 {
    constructor(a9, a10) {
        const v12 = new Int16Array(a9, a9, C7);
        Object.defineProperty(v12, "constructor", { enumerable: true, value: Array });
        const v13 = v12.constructor;
        super();
        class C16 extends v13 {
        }
        for (let i19 = 0, i20 = 10; i20--, i19 < i20;) {
        }
        const v27 = new C16();
        const v28 = Date(a10);
        const o29 = {
            [Math]: v28,
        };
        Object.defineProperty(o29, "toJSON", { writable: true, configurable: true, enumerable: true, value: v27 });
        JSON.stringify(o29);
    }
}
new C7(F0, F0);
gc();
