let v0 = 257;
const v1 = `
    let v2 = -65536;
    class C3 {
    }
    let v4 = new C3();
    ({"a":v0,"e":v2,...v4} = C3);
    /\u{12345}/myvis;
`;
eval(v1);
gc();
