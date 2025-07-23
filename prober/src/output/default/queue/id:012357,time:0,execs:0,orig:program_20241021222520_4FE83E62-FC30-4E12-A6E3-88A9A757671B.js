const o0 = {
};
for (let i4 = 0, i5 = 10; i4 !== i5; i5--) {
}
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17() {
        return a16;
    }
    Object.defineProperty(a15, 0, { enumerable: true, get: f17 });
    try { new a14(1.7976931348623157e+308, o0); } catch (e) {}
}
const v19 = new F12(F12, F12);
new F12(F12, v19);
gc();
