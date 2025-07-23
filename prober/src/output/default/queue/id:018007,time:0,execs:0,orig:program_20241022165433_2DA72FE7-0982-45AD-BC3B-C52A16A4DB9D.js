function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = [4294967296,-1507112381];
const v4 = new F1();
v4.toString = Date;
const v6 = Date();
const o7 = {
    [Math]: v6,
    [v4]: v3,
};
JSON.stringify(o7);
gc();
