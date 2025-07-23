const v2 = `
    const o3 = {
        [-2]: 9007199254740990,
    };
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v5 = v2.split(9007199254740990);
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
    return v5;
}
const v11 = f7();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v5); } catch (e) {}
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
Object.defineProperty(F12, "constructor", { enumerable: true, value: runString });
new F12(v6, f7, v11, F12);
gc();
