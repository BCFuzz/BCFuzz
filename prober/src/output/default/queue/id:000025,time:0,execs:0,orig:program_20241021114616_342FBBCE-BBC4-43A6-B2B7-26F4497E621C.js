function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v5 = [1.6108883737384262e+308,v3];
function f7() {
    const o10 = {
        get b() {
            super.e;
        },
    };
}
const v11 = f7();
let [v12,v13,v14] = "c";
v11 % v5;
f7();
Object.defineProperty(v2, 129, { configurable: true, get: f7 });
gc();
