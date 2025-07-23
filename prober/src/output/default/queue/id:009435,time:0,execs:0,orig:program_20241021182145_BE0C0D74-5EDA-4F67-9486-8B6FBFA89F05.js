class C0 {
    static {
        function f2(a3) {
            return this;
        }
        this[Symbol.iterator] = f2;
        const v8 = createGlobalObject().Float16Array;
        try { new v8(C0); } catch (e) {}
    }
}
gc();
