const v1 = new Float64Array(Float64Array);
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a5.constructor = "sticky";
    a5.slice();
}
try { new F3(v1); } catch (e) {}
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
