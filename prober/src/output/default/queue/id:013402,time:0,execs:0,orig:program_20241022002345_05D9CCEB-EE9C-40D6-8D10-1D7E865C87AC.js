function f0() {
    return f0;
}
const v2 = new Int16Array();
const v5 = [v2,v2,v2,v2];
const v6 = `
    let v8;
    try { v8 = v5.some(f0, -9); } catch (e) {}
    v8 && v8;
    v8?.[v8];
    const v12 = Math.max(v2);
    v12 >> v12;
    let v14 = Math.sign(v2);
    v14--;
    -v8;
    Map.length = Map;
    const v17 = new Map();
    const v18 = v17.has;
    v18.length;
    const v21 = v18.name?.constructor;
    try { v21.toString(); } catch (e) {}
    let v23;
    try { v23 = v21(Map); } catch (e) {}
    try { v23.strike(); } catch (e) {}
    let v25;
    try { v25 = v18.call(null); } catch (e) {}
    v25 = null;
`;
eval(v6);
gc();
