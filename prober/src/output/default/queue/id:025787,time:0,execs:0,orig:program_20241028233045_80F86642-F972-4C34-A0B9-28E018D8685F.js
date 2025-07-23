const v1 = new Uint16Array(Uint16Array);
const v2 = v1.buffer;
const v3 = v2.transfer();
function f4(a5, a6, a7, a8) {
    const v11 = new Int32Array(681);
    function f12(a13, a14, a15, a16) {
        function f17() {
            return a5;
        }
        Object.defineProperty(f17(), 9, { configurable: true, set: f17 });
        return v3;
    }
    v11.map(f12);
    return v2;
}
try { f4(v1); } catch (e) {}
gc();
