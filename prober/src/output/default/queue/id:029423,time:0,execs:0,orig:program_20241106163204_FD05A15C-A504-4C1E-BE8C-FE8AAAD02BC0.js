const v0 = [536870888,47090,255];
const v3 = `
    const o5 = {
        [1073741824]: v0,
    };
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v7 = v3.split(8);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return a11;
}
const v13 = f9(f9, v3, v8);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
Object.defineProperty(F14, "constructor", { enumerable: true, value: runString });
new F14(v8, f9, v13, F14);
gc();
