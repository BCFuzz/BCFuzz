const v1 = new Float32Array(Float32Array);
let v2;
try { v2 = v1.filter(); } catch (e) {}
function f5(a6) {
    const v8 = this.constructor;
    try { v8.getOwnPropertySymbols(v2); } catch (e) {}
    return a6;
}
const v10 = new Int16Array(231);
v10.filter(f5);
gc();
