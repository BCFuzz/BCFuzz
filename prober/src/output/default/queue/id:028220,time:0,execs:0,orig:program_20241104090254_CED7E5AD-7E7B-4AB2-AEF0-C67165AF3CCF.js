const v0 = [335587.23608574574,2.548884750068334,290.0173299251476,5.0,4.0,1.7976931348623157e+308];
const v1 = [10];
const v2 = [-4294967295,-14,536870912,6,-11,1015255194,15];
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        class C10 {
            constructor(a12) {
                v1.unshift(a12, ...v1);
            }
        }
        new C10();
    }
    Object.defineProperty(this, "a", { configurable: true, set: f8 });
    let v15 = new f8(v1);
    v15.toString = f8;
    v15 ^= v15;
    a5.shift(v2);
    this.a = v0;
}
new F3(v0);
new F3(v1);
new F3(v2);
gc();
