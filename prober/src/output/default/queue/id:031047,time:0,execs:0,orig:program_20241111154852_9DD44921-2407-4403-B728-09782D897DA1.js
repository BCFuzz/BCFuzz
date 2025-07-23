for (let i2 = 0, i3 = 10; i3; i3--) {
}
const v9 = /Ih*/vgi;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v20 = `
    async function* f21(a22, a23, a24) {
        /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
        return a22;
    }
`;
const v26 = v20.split(v9);
const v28 = `
    typeof 8;
`;
const v30 = v28.replaceAll(8, v26);
for (let i33 = -3, i34 = 10;
    (() => {
        const v35 = 8 < i34;
        class C36 {
        }
        try { C36.constructor(v30); } catch (e) {}
        return v35;
    })();
    i34--) {
}
gc();
