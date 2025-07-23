const v2 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v3 = `
    Map.length = Map;
    const v5 = new Map();
    const v6 = v5.has;
    const v8 = v6.name?.constructor;
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C11 {
        toString(a13, a14) {
        }
    }
    const v15 = new C11();
    v15.constructor.prototype;
    try { v8(Map); } catch (e) {}
    try { v6.call(null); } catch (e) {}
    let v20;
    try { v20 = v6(Map); } catch (e) {}
    function f21() {
        return f21;
    }
    f21.a = f21;
    f21.b = f21;
    v5.valueOf = f21;
    let v22 = v5 | v2;
    const v23 = v22 !== v22;
    v22 / v22;
    v22++;
    7 + 7;
    const v29 = Float32Array.prototype;
    try { v29.filter(v23); } catch (e) {}
    new Uint8Array(2165, v20);
`;
eval(v3);
gc();
