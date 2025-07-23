const v0 = [];
function f1(a2) {
    return f1;
}
function f3(a4) {
    const v6 = new Float32Array();
    v6.constructor = a4;
    let v7;
    try { v7 = v6.slice(); } catch (e) {}
    return v7;
}
const v9 = Symbol.species;
f1[v9] = f3;
v0.constructor = f1;
v0.concat(Symbol, v9, Symbol);
gc();
