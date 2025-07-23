function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = Date(F0);
const v7 = [1739142838];
const v9 = [v7,2147483648,[v7,F0],2147483648,v3];
const v11 = SharedArrayBuffer.constructor;
try { v11(v9); } catch (e) {}
gc();
