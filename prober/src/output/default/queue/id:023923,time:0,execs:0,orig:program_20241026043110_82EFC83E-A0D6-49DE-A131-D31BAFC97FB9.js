const v2 = new SharedArrayBuffer();
const v3 = new Uint32Array(v2, Uint32Array, v2);
function f4() {
    function f5(a6) {
        return a6;
    }
    function f7() {
        return f7;
    }
    const t9 = v3[f5];
    t9[f7] = f5;
    return f7;
}
Object.defineProperty(v2, "constructor", { configurable: true, enumerable: true, get: f4 });
try { v2.slice(); } catch (e) {}
gc();
