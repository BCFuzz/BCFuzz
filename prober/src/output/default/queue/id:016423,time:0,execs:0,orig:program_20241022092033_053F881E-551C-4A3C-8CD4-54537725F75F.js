function f0() {
    function F7(a9, a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F7();
    ("").repeat();
    new Uint16Array(268435456);
}
const v16 = f0();
f0();
const o19 = {
};
f0();
class C21 {
}
new C21();
new C21();
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor;
}
this.Reflect = this;
new F24(v16);
function f34(a35, a36, a37) {
    a37.length = a37;
    const o38 = {
    };
}
gc();
