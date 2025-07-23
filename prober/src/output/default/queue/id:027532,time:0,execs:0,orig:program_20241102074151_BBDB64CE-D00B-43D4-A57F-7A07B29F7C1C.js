const v0 = /PKfoo|(bar|baz)|quux/myu;
const v1 = /W\xed\xb0\x80zA(?:ab)/mygsu;
const v2 = /abc|def|ghi\p{Script=Greek}/mdgisu;
const v4 = [[v2],v1,v1,v1,v2,v2];
const v5 = [v4,v4,v4,v2,v0];
const v6 = /a(?=b)c/mvgs;
const v7 = [v1,v1,v1,v1,v1];
function f8(a9, a10, a11, a12) {
    const t8 = a9.constructor;
    return t8(a11);
}
f8(v6, f8(v7), v5);
gc();
