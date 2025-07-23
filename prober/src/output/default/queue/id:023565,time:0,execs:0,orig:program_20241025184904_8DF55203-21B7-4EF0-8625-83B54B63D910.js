function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C7 extends F0 {
    constructor(a9, a10) {
        const v12 = new Int16Array();
        Object.defineProperty(v12, "constructor", { enumerable: true, value: Array });
        const v13 = v12.constructor;
        super();
        class C16 extends v13 {
            constructor(a18, a19) {
                super(a18);
            }
        }
        for (let i22 = 0, i23 = 10; i23--, i22 < i23;) {
        }
        const v30 = new C16();
        const v31 = Date();
        const o32 = {
            [Math]: v31,
        };
        Object.defineProperty(o32, "toJSON", { writable: true, configurable: true, enumerable: true, value: v30 });
        JSON.stringify(o32);
    }
}
new C7();
gc();
