const o12 = {
    toString(a1, a2) {
        class C4 {
            constructor(a6) {
                (this + "c") + a6;
                let v9 = 1e-15;
                ({"length":v9,} = arguments);
            }
        }
        new C4(this);
        return "c";
    },
};
try { o12.toString(); } catch (e) {}
gc();
