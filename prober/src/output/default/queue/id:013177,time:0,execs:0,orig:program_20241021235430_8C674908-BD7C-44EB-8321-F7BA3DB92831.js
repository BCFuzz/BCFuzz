const v0 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
const v4 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v7 = `
    const v9 = new Map();
    try { v9.entries(); } catch (e) {}
    const v11 = v9.has;
    let v12;
    try { v12 = v11(Map); } catch (e) {}
    function f13() {
        return f13;
    }
    f13.length = f13;
    v9.valueOf = f13;
    const v14 = v9 | v4;
    v14 / v14;
    const v18 = Float32Array.length;
    v18 >>> v18;
    const v20 = new Float32Array(7);
    try { v20.filter(); } catch (e) {}
    for (let v22 = 0; v22 < 5; v22++) {
        const v25 = ("p" + v22).codePointAt;
        try { v25.apply("p", "p"); } catch (e) {}
        const v27 = v25.call(v0);
        const v28 = v27 - v27;
        v28 + v28;
        try { v25(); } catch (e) {}
    }
    let v31 = 128;
    const v32 = v31--;
    v32 + v32;
    const v35 = new Float64Array();
    try { v35.findLast(1024); } catch (e) {}
    let v37 = 2165;
    v37--;
    const v39 = new Uint8Array(v37, v12, v20, v3);
    let v40 = undefined;
    v40 = f13;
    for (let v41 = 0; v41 < 5; v41++) {
        v41 & v41;
        try { ("p").lastIndexOf(F1); } catch (e) {}
        "p" + v41;
    }
    let v46 = 20;
    v46 & v46;
    const v48 = v46++;
    v48 ** v48;
    v39[842];
`;
eval(v7);
gc();
