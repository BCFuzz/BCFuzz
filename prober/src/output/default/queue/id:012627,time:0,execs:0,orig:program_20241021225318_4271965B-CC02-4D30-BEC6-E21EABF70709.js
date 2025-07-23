function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
const v7 = [v6];
const v10 = this.constructor.freeze(v7);
try { v10.push(v6); } catch (e) {}
gc();
