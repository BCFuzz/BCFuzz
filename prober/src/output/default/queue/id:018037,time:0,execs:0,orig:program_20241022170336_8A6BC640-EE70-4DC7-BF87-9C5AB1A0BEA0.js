const v3 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v4 = `
    try { Map.apply("-65535", v4); } catch (e) {}
    Map.length = Map;
    const v7 = new Map();
    const v8 = v7.has;
    v8.length;
    const v10 = v8.name;
    v10 == v10;
    const v12 = v10?.constructor;
    let v13;
    try { v13 = v12(v8); } catch (e) {}
    function F14() {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C16 {
        toString(a18, a19) {
        }
    }
    try { C16.apply(v12, v13); } catch (e) {}
    const v21 = new C16();
    const v22 = v21.constructor;
    const v23 = v22.prototype;
    try { v23.toString(v23, v22); } catch (e) {}
    const v25 = v23?.constructor;
    try { v25(); } catch (e) {}
    let v27;
    try { v27 = v12(Map); } catch (e) {}
    v27[1] = v27;
    try { v8.call(null); } catch (e) {}
    let v29;
    try { v29 = v8(Map); } catch (e) {}
    function f30() {
        return C16;
    }
    f30.a = f30;
    f30.b = f30;
    v7.valueOf = f30;
    let v31 = C16 | v3;
    v31 & v31;
    v31--;
    const v34 = v31 !== v31;
    let v35 = v31 / v31;
    const v36 = v35++;
    v36 + v36;
    const v38 = v31++;
    v38 - v38;
    7 / 7;
    const v43 = Float32Array.prototype;
    try { v43.filter(v34); } catch (e) {}
    new Uint8Array(2165, v29);
`;
eval(v4);
gc();
