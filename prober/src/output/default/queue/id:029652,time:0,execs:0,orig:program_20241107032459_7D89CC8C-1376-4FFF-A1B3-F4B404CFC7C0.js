const v1 = EvalError();
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                Object.defineProperty(this, v1, { configurable: true, enumerable: true, get: EvalError });
            `;
            const v11 = v10.split();
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v4);
}
gc();
