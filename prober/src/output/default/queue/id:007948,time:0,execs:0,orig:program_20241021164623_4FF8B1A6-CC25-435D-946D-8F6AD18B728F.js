const o2 = {
    toString(a1) {
        super[this] = this;
        return this;
    },
};
const v3 = [-2.0063361477614228,0.28610519812655666,2.3363834216014645];
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    try { a6.slice(a8); } catch (e) {}
}
new F4(v3, o2, o2);
gc();
