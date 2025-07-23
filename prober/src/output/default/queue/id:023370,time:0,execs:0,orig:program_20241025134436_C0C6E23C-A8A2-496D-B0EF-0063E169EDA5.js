const v1 = [-4294967295,6,4294967296,536870888,11,65535,1161135588,-14];
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
function f5(a6, a7) {
    const v8 = v4.__proto__;
    function f9(a10) {
        return v1;
    }
    Object.defineProperty(v8, "e", { configurable: true, enumerable: true, set: f9 });
    return v1;
}
const v11 = [13720,20493];
v11.valueOf = f5;
v1 <= v11;
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i19 = 10, i20 = 10; -13369 < i20; i20--) {
    }
    this.a = undefined;
}
new F13(F2, f5);
new F13(f5, F2);
gc();
