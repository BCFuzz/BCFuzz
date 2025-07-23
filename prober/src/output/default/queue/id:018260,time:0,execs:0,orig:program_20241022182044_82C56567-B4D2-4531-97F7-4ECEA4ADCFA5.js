function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4, a5) {
    return f3;
}
for (let v6 = 0; v6 < 5; v6++) {
    function F8(a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        F8.name in a11;
    }
    new F8(v2, F0);
    new F8(196.25100004624983, f3);
}
gc();
