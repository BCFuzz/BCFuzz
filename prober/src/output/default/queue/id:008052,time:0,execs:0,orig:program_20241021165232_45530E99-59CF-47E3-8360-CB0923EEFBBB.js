class C2 {
    constructor(a4, a5) {
        Object.defineProperty(this, 212, { value: -1024 });
    }
}
const v6 = new C2(C2, 1956071029);
const o7 = {
    3: 1956071029,
    __proto__: v6,
};
o7[212] = o7;
gc();
