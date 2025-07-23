const v1 = new Uint32Array(Uint32Array, Uint32Array, Uint32Array);
const v3 = new Uint16Array(v1, Uint32Array, Uint32Array);
function f4() {
    function f5(a6) {
        return v1;
    }
    const v7 = v1[f5];
    v7[v7] = f5;
    return Uint16Array;
}
Object.defineProperty(v3, "constructor", { configurable: true, enumerable: true, get: f4 });
try { v3.slice(); } catch (e) {}
gc();
