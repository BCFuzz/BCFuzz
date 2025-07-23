function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o3 = {
    get h() {
        return this;
    },
};
function f4() {
    return F0;
}
function f5(a6) {
    return a6;
}
Object.defineProperty(o3, "value", { configurable: true, enumerable: true, get: f4, set: f5 });
const v8 = new Uint16Array();
const o9 = {
};
o9.constructor.defineProperties(v8, o3);
gc();
