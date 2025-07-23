function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = [4294967296,-1507112381];
const v3 = new F0();
const v6 = Date();
const o7 = {
    [Math]: v6,
    [v3]: v2,
};
JSON.stringify(o7);
gc();
