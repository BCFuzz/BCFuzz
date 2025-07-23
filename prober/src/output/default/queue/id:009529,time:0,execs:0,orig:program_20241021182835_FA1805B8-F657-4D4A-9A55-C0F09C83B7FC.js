class C2 {
}
let v3 = new C2();
const v4 = `
    -2 % 9223372036854775807;
    v3 %= C2;
    /\u{12345}/myvis;
`;
eval(v4);
gc();
