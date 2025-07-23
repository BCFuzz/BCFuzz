let v0 = [];
let v2 = new BigUint64Array();
const o6 = {
    set h(a4) {
        ({"e":v0,"h":v2,} = this);
        const o5 = {
        };
    },
};
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F7(v2);
const v11 = new F7();
const v12 = new F7(v10);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    const v18 = this.constructor;
    try { new v18(a16, v11, o6); } catch (e) {}
    a17.h = a17;
}
new F13(v12, v12, v10);
gc();
