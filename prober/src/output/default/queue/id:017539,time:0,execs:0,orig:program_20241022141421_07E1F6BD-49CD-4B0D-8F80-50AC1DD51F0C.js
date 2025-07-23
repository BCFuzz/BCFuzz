const o10 = {
    toString(a1, a2) {
        class C4 {
            constructor(a6) {
                (this + "c") + a6;
            }
        }
        new C4(this);
        return a2;
    },
};
try { o10.toString(o10, o10, o10, o10, o10); } catch (e) {}
gc();
