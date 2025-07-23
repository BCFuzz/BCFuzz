class C2 {
    constructor(a4) {
        this.collation = this;
        try { ("FR0X").localeCompare(a4, a4, this); } catch (e) {}
    }
}
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    Reflect.construct(C2, [i8,i8], Float32Array);
}
gc();
