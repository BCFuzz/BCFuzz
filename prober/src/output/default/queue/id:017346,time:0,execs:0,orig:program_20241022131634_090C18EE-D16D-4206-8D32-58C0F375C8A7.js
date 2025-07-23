const v2 = 1073741825 + -62301;
const v4 = new Uint16Array();
const v6 = `
    let v8;
    try { v8 = ("-13").indexOf("-13"); } catch (e) {}
    v8--;
    const v10 = ("-13")[undefined];
    const o11 = {
    };
    o11.a = o11;
    o11.h = o11;
    o11.h = o11;
    o11.h = v10;
    const o12 = {
        15: o11,
        "g": undefined,
        "f": v4,
        "b": "-13",
        ...v4,
    };
    o12[15] = o12;
    o12[15] = o12;
    o12[1] = o12;
    o12.h = v10;
    o12.e = v10;
    const o13 = {
    };
    o13.h = o13;
    try { Math.abs(v2); } catch (e) {}
    -256 / -256;
    -1000000.0 + -1000000.0;
`;
eval(v6);
gc();
