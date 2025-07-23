class C1 {
    constructor(a3) {
        const v4 = this.constructor;
        try { new v4("d"); } catch (e) {}
        a3 in this;
    }
}
new C1();
for (let i9 = 0; i9 < 21768; i9++) {
}
gc();
