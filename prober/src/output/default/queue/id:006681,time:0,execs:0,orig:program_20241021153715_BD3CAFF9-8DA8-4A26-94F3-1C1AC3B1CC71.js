const v0 = [-7677,1613127934,16,47879,12,10000,-56627,-4096,21519];
function f1(a2) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F3(v0, v0);
    return f1;
}
Object.defineProperty(v0, Symbol.toPrimitive, { enumerable: true, value: f1 });
const v11 = new SharedArrayBuffer();
const v13 = new DataView(v11);
try { v13.getUint16(v0); } catch (e) {}
gc();
