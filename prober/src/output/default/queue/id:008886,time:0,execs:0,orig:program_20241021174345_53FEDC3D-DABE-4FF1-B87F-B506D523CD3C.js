class C0 {
}
const v1 = new C0();
const v4 = [-2147483648,-7933,1386627879];
for (let v5 = 0; v5 < 25; v5++) {
    class C6 {
    }
    function F9(a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        const v14 = this.__defineSetter__;
        try { v14(); } catch (e) {}
        a12.constructor();
        const o17 = {
        };
        o17.h = o17;
        Reflect.ownKeys(o17);
    }
    const v20 = new F9(v4, C6);
    const v21 = v20.constructor;
    try { new v21(v1, v1); } catch (e) {}
    const v23 = v20.constructor;
    v23.prototype = v23;
    new v23(v4, 127);
}
gc();
