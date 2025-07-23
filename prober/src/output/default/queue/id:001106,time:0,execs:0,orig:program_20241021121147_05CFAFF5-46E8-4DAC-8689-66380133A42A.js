function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "toStringTag";
    this.b = a3;
}
const v5 = new F1(F1, "toStringTag");
const o6 = {
    ...v5,
};
gc();
