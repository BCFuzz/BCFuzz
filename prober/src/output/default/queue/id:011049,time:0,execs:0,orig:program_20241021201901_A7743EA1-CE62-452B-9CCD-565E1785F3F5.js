class C2 {
}
const v3 = new C2();
const v5 = `
    const v6 = /b/mvis;
    /\u{12345}/myvis;
    if ("9" >= "undefined") {
        v3[v6] ^= 2.220446049250313e-16;
    }
`;
eval(v5);
gc();
