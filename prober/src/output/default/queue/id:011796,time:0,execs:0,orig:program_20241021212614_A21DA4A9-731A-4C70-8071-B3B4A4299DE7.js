const v0 = `
    class C1 {
        static {
            Array()?.propertyIsEnumerable;
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
