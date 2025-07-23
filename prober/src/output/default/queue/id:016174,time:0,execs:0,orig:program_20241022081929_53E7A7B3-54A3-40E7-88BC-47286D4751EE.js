const v1 = new Uint32Array();
const v2 = new Uint32Array(v1, v1, v1);
function f3() {
    function f4(a5) {
        return f4;
    }
    const v6 = v2[f4];
    v6[v6] = f4;
    return f4;
}
Object.defineProperty(v1, "constructor", { configurable: true, enumerable: true, get: f3 });
try { v1.slice(); } catch (e) {}
gc();
