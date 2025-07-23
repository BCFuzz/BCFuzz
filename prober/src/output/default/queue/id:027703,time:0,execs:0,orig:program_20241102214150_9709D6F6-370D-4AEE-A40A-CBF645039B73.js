function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o2 = {
    };
    class C4 extends o2.constructor {
    }
    C4.assign.call();
}
const v8 = F0.prototype.constructor;
try { new v8(); } catch (e) {}
gc();
