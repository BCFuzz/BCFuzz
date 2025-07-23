const v2 = new Float32Array(5);
for (let i5 = 0, i6 = 10; i5 !== i6; i6--) {
}
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    function f18() {
        return a17;
    }
    Object.defineProperty(a16, 0, { enumerable: true, get: f18 });
}
const v19 = new F13(F13, F13);
const v20 = new F13(F13, v19);
const v21 = v20.constructor;
try { new v21(5, v2); } catch (e) {}
gc();
