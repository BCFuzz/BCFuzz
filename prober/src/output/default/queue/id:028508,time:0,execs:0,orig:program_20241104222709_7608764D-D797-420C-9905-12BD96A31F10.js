for (let i2 = 0, i3 = 10; i3; i3--) {
}
const v9 = /Ih*/vgi;
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
const v21 = `
    async function* f22(a23, a24, a25) {
        return a23;
    }
`;
const v26 = v21.split(v9);
try { v26.flatMap(eval); } catch (e) {}
gc();
