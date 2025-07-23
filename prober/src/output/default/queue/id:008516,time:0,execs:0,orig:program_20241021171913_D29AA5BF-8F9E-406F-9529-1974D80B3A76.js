function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new Float64Array();
v4["fill"]("fill", 1, F0);
gc();
