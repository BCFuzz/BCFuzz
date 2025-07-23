function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F0 {
}
for (let v4 = 0; v4 < 250; v4++) {
    function f6(a7, a8) {
    }
    new Promise(f6);
}
gc();
