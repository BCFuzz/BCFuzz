class C2 {
    static {
        const v4 = async (a5, a6, a7, a8) => {
            this[C2] = a6;
            return a6;
        };
        v4.call(C2, v4, C2);
    }
}
gc();
