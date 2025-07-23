function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this[Symbol.toPrimitive] = Symbol;
}
const v4 = [4294967296,-1507112381];
const v5 = new F1();
const v8 = Date();
const o9 = {
    [Math]: v8,
    [v5]: v4,
};
JSON.stringify(o9);
gc();
