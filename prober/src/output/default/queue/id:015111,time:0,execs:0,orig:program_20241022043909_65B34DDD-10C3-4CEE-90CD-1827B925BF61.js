let v0 = 10;
const v1 = v0--;
let v2 = 1739;
function f3() {
    try { arguments.callee(); } catch (e) {}
    v2 &= v0;
    return v1;
}
f3.call();
f3();
gc();
