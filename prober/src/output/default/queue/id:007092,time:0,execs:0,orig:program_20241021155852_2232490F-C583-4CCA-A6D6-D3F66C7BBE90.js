class C1 extends SharedArrayBuffer {
    static {
        const v3 = new this();
        v3.slice();
    }
}
gc();
