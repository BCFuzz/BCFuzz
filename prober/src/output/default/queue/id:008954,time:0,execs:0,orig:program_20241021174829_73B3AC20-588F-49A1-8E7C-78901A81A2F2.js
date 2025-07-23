class C0 {
}
const v1 = `
    const v3 = delete C0["function"];
    v3 || v3;
    /\u{12345}/myvis;
`;
eval(v1);
gc();
