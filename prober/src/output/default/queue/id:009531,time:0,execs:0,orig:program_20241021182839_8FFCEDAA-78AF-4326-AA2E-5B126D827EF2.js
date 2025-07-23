class C2 {
}
const v3 = new C2();
const v4 = /\8+/dyis;
const v5 = `
    const v6 = -2 % 9223372036854775807;
    const v7 = v3.b;
    let v8 = v4.dotAll;
    /\u{12345}/myvis;
    --v8;
    v6[3] = v7;
`;
eval(v5);
gc();
