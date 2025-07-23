const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function F8() {
        if (!new.target) { throw 'must be called with new'; }
        function F11() {
            if (!new.target) { throw 'must be called with new'; }
            const v14 = new SharedArrayBuffer();
            const v16 = new DataView(v14);
            try { v16.setUint16(v16, F11, 1379369823); } catch (e) {}
        }
        new F11();
    }
    new F8();
    return Int32Array;
}
v2.map(f3);
gc();
