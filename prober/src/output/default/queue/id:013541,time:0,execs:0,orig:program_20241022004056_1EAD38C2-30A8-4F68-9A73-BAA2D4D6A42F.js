function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4) {
    a4.b = a4;
    return F0;
}
try { f3.call(); } catch (e) {}
f3(v2);
f3(v2);
for (let v8 = 0; v8 < 6250; v8++) {
}
gc();
