const v0 = /(E(?<a>(?<b>(?<c>(?<d>.).).).)*)/iu;
function f1() {
    const v2 = `
        /\u{12345}/myvis;
    `;
    return v2;
}
v0.toString = f1;
const v4 = /\1\2(a(?:\1(b\1\2))\2)\1+/mdgsu;
v0.toString(v0, v4, v4, v4, f1).replace(v4);
gc();
