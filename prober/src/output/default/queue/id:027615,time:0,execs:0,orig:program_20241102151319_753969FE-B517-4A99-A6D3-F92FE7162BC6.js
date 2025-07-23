class C1 {
    constructor(a3, a4) {
        a3[Symbol.replace];
    }
}
const v8 = new C1(3.0);
const v10 = new C1(v8);
Object.defineProperty(v10, Symbol.replace, { enumerable: true, value: Symbol });
new C1(v10);
const v15 = new Uint32Array(1003);
for (const v16 in v15) {
}
gc();
