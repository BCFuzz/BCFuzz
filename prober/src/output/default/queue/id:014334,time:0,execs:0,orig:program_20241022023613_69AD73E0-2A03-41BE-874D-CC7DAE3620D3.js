const v0 = [-4294967295,6,4294967296,536870888,11,65535,1161135588,-14];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
function f4(a5, a6) {
    for (let v7 = 0; v7 < 100; v7++) {
        const v8 = v3.__proto__;
        function f9(a10) {
            return a10;
        }
        Object.defineProperty(v8, "e", { configurable: true, enumerable: true, set: f9 });
    }
    return v0;
}
const v11 = [13720,20493];
v11.valueOf = f4;
v0 <= v11;
gc();
