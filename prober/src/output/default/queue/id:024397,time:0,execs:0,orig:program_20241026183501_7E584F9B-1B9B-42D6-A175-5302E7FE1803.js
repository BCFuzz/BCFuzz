const v2 = new Float64Array();
const v3 = new Uint32Array();
function f4() {
    function f5(a6) {
        return v3;
    }
    function f7() {
        return f7;
    }
    const t9 = v3[f5];
    t9[f7] = f5;
    return Uint32Array;
}
Object.defineProperty(v2, "constructor", { configurable: true, enumerable: true, get: f4 });
try { v2.slice(); } catch (e) {}
gc();
