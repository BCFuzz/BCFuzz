const o4 = {
    get d() {
        1073741823n & 4294967295;
        return this;
    },
};
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const o9 = {
    };
    o9.constructor.assign(o9, a7);
}
const v12 = new F5();
const t13 = v12.constructor;
const v14 = new t13();
const v15 = v14.constructor;
try { new v15(o4); } catch (e) {}
gc();
