const v0 = /a.xyz{0,1}r+/dvs;
const v1 = /2(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\1030Y/mdyi;
const v2 = /a\nW/vgi;
const v3 = /((\xed\xa0\x80))\x02q9abc/dygis;
function f4(a5, a6, a7, a8) {
    a6.toString();
    const v11 = a5.toString().link(f4);
    const v12 = a7.global;
    for (const v14 of v11) {
    }
    const o21 = {
        [a5](a16, a17, a18, a19) {
            try { a5(this, "n", a18, a17, a16, this, a19, a7, v12); } catch (e) {}
        },
    };
    return a7;
}
f4(v2, v0, v1);
f4(v0, v3, v3);
gc();
