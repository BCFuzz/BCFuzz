const v1 = /Cfe/mdygisu;
v1.toString = Symbol;
const v2 = [Symbol,Symbol,Symbol,Symbol,Symbol];
function f3(a4, a5, a6) {
    return a5;
}
const v8 = [v2,f3(v1, Symbol, v2),f3,v1];
const v9 = [v8];
try { v9.toLocaleString(v8, v1); } catch (e) {}
gc();
