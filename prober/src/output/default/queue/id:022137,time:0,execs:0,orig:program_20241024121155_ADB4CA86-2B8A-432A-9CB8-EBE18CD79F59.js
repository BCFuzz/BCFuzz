function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o2 = {
};
const v4 = new Proxy(F0, o2);
typeof v4 === "object";
gc();
