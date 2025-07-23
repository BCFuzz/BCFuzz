class C0 {
    #m(a2, a3) {
        const v4 = this.constructor;
        const v5 = [1073741824,-26526];
        const o6 = {
        };
        const v8 = new Proxy(v5, o6);
        try { new v4(C0, v4, v8, v5, a2); } catch (e) {}
    }
    constructor(a11) {
        this.#m();
    }
}
new C0(C0);
const v15 = 1073741825n % 1073741825n;
for (let i17 = v15, i18 = 10; i17 < i18; i18--) {
}
gc();
