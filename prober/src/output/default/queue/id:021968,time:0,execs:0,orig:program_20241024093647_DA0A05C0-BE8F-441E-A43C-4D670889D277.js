class C2 {
    constructor(a4) {
        Object.defineProperty(this, "usage", { value: Int16Array });
        try { ("FR0X").localeCompare(a4, a4, this); } catch (e) {}
    }
}
new C2();
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
