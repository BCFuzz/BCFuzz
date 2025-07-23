for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v11 = `
    async function* f12(a13, a14) {
        const v16 = new Int16Array();
        v16.a = v16;
        class C17 {
            constructor(a19) {
                a19.toPrimitive = "129";
                for (let v20 = 0; v20 < 250; v20++) {
                }
            }
        }
        new C17(v16);
        return a13;
    }
    f12(v11, v11);
`;
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
    for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
    }
}
eval(v11).next();
gc();
