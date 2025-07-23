function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o4 = {
};
const v5 = o4.constructor;
try { v5.create(v2, null); } catch (e) {}
gc();
