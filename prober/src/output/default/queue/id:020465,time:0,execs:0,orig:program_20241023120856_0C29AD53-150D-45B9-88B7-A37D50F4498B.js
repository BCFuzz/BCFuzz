function f0() {
    return f0;
}
class C1 {
}
const v3 = new Set();
class C4 extends f0 {
}
const v5 = new C4();
const v7 = `
    function f8(a9, a10) {
        return a9;
    }
    let v11;
    try { v11 = f8(v5, Set); } catch (e) {}
    const v12 = v11?.constructor;
    let v13;
    try { v13 = new v12(); } catch (e) {}
    v13.g = v13;
    Uint16Array.b = Uint16Array;
    const v15 = new Uint16Array();
    try { v15.forEach(v3); } catch (e) {}
    const v18 = v15.fill().join();
    try { v18.anchor(v13); } catch (e) {}
    let v20;
    try { v20 = v18.bold(); } catch (e) {}
    try { v20.endsWith(Set); } catch (e) {}
    const v22 = v18?.trimRight;
    v22.d = v22;
    try { v22(); } catch (e) {}
    const v24 = v18.replaceAll(f8, v18, v7, f8);
    const v25 = v24?.match;
    try { v25(f0); } catch (e) {}
    v24.g = v24;
    switch ("n") {
        default:
            let v28 = 0.08677347165770777;
            let v29 = v28 ^ v28;
            v29 | v29;
            v29--;
            const v32 = --v28;
            v32 - v32;
            const v34 = -v32;
            v34 << v34;
            v32 >>> v32;
            const v37 = -9007199254740991;
            const v38 = v37 & v37;
            v38 < v38;
            const v40 = v37 & C1;
            v40 & v40;
            const v42 = v40 - v40;
            v42 - v42;
            break;
    }
    /\u{12345}/myvis;
`;
eval(v7);
gc();
