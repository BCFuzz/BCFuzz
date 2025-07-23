function f0() {
    const v1 = [f0,f0];
    let v2;
    try { v2 = v1.forEach(); } catch (e) {}
    ([-2147483647,-268435456,452489865,-358679195,-952960995,-61923,22145,65535,-2475,457434681]).concat(v2);
    class C6 extends Set {
    }
    const v7 = new C6();
    Reflect.deleteProperty(v7);
}
const v12 = new Uint16Array(1000);
v12["some"](f0);
gc();
