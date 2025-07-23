function f0() {
    const t1 = -1.0490479686079355e+308;
    with (delete t1.e) {
    }
    const o5 = {
        m(a4) {
            return a4;
        },
    };
    return o5;
}
const v6 = f0();
const o8 = {
    get a() {
        return v6;
    },
};
gc();
