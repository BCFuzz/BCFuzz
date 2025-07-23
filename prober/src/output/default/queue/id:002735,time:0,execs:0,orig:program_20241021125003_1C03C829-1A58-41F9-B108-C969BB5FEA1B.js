const v2 = `
    const v4 = ("-13")[undefined];
    const o5 = {
    };
    o5.h = v4;
    const o6 = {
    };
    o6.e = v4;
    const o7 = {
    };
    o7.a = v2;
    const o8 = {
    };
    o8.h = v4;
    o8.e = v4;
    o8.d = 512;
    class C9 {
        static #a;
    }
`;
eval(v2);
gc();
