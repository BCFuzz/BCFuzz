class C1 extends String {
    static {
        const v3 = new this();
        for (let i = 0; i < 5; i++) {
            v3.valueOf(this);
        }
        const v7 = new Uint8Array(3129);
        for (const v8 in v7) {
        }
    }
}
gc();
