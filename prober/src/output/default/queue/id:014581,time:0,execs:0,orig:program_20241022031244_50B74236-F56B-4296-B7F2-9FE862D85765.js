function f0() {
    return ("toStringTag").substring(7);
}
f0();
f0();
function F6() {
    if (!new.target) { throw 'must be called with new'; }
}
class C8 extends F6 {
}
for (let v9 = 0; v9 < 250; v9++) {
    v9++;
    v9--;
}
gc();
