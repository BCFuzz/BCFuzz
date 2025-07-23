const v2 = new Uint8Array();
const v3 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
const v4 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v6 = [v2];
const v7 = `
    Map.length = Map;
    const v9 = new Map();
    const v10 = v9.has;
    v10.name;
    try { v10.call(null); } catch (e) {}
    let v13;
    try { v13 = v10(Map); } catch (e) {}
    function f14() {
    }
    f14.b = f14;
    v9.valueOf = f14;
    let v15 = v9 | v4;
    const v16 = v15 !== v15;
    v15 / v15;
    v15++;
    7 + 7;
    const v22 = Float32Array.prototype;
    try { v22.filter(v16); } catch (e) {}
    v2.BYTES_PER_ELEMENT = Float32Array;
    const v24 = new Float32Array(7);
    for (let v25 = 0; v25 < 5; v25++) {
        const t26 = "p";
        t26[0] = "p";
        const v27 = "p" + v25;
        const v28 = v27.codePointAt;
        v28.length = v28;
        let v29;
        try { v29 = v28.call(v3); } catch (e) {}
        v29 << v29;
        try { v28(v24); } catch (e) {}
        v6[v27] = v25;
    }
    let v32 = 128;
    v32--;
    const v35 = new Float64Array(v32);
    v35[3] = v35;
    try { v35.findLast(1024, v9); } catch (e) {}
    Uint8Array.prototype = Uint8Array;
    class C38 {
        #c;
    }
    new C38();
    const v40 = [1.7664845889080372,0.18563487804419587,2.0,-1.0,2.3318882112552703];
    class C41 {
        set a(a43) {
        }
        static 12;
    }
    v40.length;
    new Uint8Array(2165, v13);
`;
eval(v7);
gc();
