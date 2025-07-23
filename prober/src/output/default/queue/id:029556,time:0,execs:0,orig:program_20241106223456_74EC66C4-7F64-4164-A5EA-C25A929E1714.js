for (let i2 = 0, i3 = 10; i3; i3--) {
}
const v9 = /Ih*/vgi;
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
const v21 = `
    async function* f22(a23, a24, a25) {
        /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
        return a23;
    }
`;
const v27 = v21.split(v9);
try { v27.flatMap(eval); } catch (e) {}
gc();
