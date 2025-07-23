function f1() {
    return Uint16Array;
}
class C2 extends f1 {
}
const v3 = new C2();
const v4 = /a\nW/vgi;
function f5(a6, a7) {
    const v8 = `
        /[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]\u{12345}\u{23456}?/mygiu;
    `;
    return v8;
}
v4.toString = f5;
function f10(a11, a12, a13, a14) {
    const v15 = a11.toString(a14, f1, f1, C2);
    let v16;
    try { v16 = v15.replace(); } catch (e) {}
    v16.small();
    const v18 = v15.link(f10);
    const v19 = v18.trimEnd;
    let v20;
    try { v20 = v19(v4, v15); } catch (e) {}
    v18.split(v15);
    for (const v22 of v18) {
        v22[0] = v22;
        v22.d = v22;
        v22.search();
    }
    const o30 = {
        "f": a12,
        [a14]: v20,
        "e": f10,
        "a": Uint16Array,
        ...v3,
        [f10](a25, a26, a27, a28) {
            for (let v29 = 0; v29 < 5; v29++) {
            }
        },
    };
    for (let i33 = 0, i34 = 10; i33 !== i34; i34--) {
    }
    return a11;
}
f10(v4);
gc();
