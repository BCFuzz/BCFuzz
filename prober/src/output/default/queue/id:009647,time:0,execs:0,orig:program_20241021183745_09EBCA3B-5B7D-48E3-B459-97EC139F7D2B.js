const v0 = `
    class C1 {
        static {
            super[C1];
        }
    }
    /\u{12345}/myvis;
    class C5 {
        #toString(a7, a8, a9) {
        }
    }
`;
eval(v0);
gc();
