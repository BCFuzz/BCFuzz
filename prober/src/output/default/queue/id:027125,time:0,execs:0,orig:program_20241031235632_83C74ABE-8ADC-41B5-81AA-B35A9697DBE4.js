const v0 = `
    /\u{12345}w(?!a)?a/mygis;
    class C2 {
        #c;
    }
    new C2();
`;
eval(v0);
gc();
