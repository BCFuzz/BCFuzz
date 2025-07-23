const v0 = /(E(?<a>(?<b>(?<c>(?<d>.).).).)*)/iu;
function f1() {
    const v2 = `
        /\u{12345}/myvis;
    `;
    return v2;
}
v0.toString = f1;
const v5 = v0.toString().replace();
try { Uint8Array.fromHex(v5); } catch (e) {}
gc();
