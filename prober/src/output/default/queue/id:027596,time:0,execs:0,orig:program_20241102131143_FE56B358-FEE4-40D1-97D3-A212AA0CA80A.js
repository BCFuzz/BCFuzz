class C1 {
    #f;
}
const v2 = new C1();
const v4 = new Int16Array(4.0);
for (const v5 in v4) {
    class C6 {
    }
    gc();
    const v9 = new C6();
    const v11 = this.constructor;
    v11.assign(v9, v11, v2);
}
gc();
