const v1 = `
    class C2 {
        constructor(a4, a5) {
            a4[1858] = "-2";
        }
    }
    new C2(C2);
    /\u{12345}/myvis;
`;
eval(v1);
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();
