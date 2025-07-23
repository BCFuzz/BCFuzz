const v0 = `
    const v1 = /9P()(ab|cde)[ra|bc]/gu;
    class C2 {
        static {
            super.d = v1;
        }
    }
`;
eval(v0);
gc();
