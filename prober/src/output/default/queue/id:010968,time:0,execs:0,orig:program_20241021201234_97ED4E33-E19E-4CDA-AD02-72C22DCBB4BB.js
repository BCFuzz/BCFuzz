class C2 {
    constructor(a4, a5) {
        const v6 = this[676286175];
        const o7 = {
        };
        const v9 = new Proxy(this, o7);
        v9.__lookupGetter__(v6);
    }
    [676286175] = 65537;
}
new C2(65537, 65537);
gc();
