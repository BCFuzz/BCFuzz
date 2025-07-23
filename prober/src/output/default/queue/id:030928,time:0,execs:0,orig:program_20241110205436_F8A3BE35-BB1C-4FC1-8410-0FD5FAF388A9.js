for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new BigInt64Array();
const v13 = `
    async function* f14(a15, a16) {
        return a15;
    }
`;
const v18 = `
    for (const v19 of v12) {
        const o20 = {
        };
        o20.h = 2.8130313316647086;
    }
`;
const v21 = v18.replaceAll(8, v13);
class C22 {
}
const v23 = C22.constructor;
try { v23(v21); } catch (e) {}
for (let i27 = 0, i28 = 10; i28--, i27 < i28;) {
}
gc();
