function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new Uint32Array(1024);
const o7 = {
    [2713]: v2,
    ...v5,
};
gc();
