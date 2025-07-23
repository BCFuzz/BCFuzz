function f0(a1, a2, a3, a4) {
    const o5 = {
    };
    return o5;
}
const v6 = f0();
const v7 = v6.a;
const v8 = f0();
function f9() {
    return f9;
}
const v10 = `
    let v12;
    try { v12 = Map.apply(v6, f9); } catch (e) {}
    const v13 = new Map();
    const v14 = v13.has;
    try { v14(Map, v8, v7, v12); } catch (e) {}
`;
eval(v10);
gc();
