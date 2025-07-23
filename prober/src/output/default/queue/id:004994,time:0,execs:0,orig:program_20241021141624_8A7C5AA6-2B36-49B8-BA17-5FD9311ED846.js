class C1 {
    constructor(a3, a4) {
        Object.defineProperty(this, 212, { value: -1024 });
    }
}
const v5 = new C1(-1024, C1);
const o6 = {
    __proto__: v5,
};
o6[212] = o6;
gc();
