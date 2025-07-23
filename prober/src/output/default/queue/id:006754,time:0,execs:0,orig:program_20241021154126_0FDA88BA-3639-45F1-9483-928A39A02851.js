const o0 = {
};
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
const v5 = new Uint8ClampedArray();
v5["fill"](v3, o0);
gc();
