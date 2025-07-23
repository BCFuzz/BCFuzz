const v0 = `
    /\xf0\x9f\x92\xa9+/yis;
    class C2 {
        #h;
    }
    new C2();
    /\u{12345}/myvis;
`;
eval(v0);
gc();
