function f0() {
    const o5 = {
        set f(a3) {
            const t3 = this.__proto__;
            t3[536870887] = 1024;
        },
    };
    return o5;
}
const v6 = f0();
const v7 = f0();
class C8 extends f0 {
    constructor(a10, a11) {
        super();
        v7.f = v6;
    }
}
new C8(f0, v7);
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
const v26 = Date().getMonth;
try { v26(); } catch (e) {}
class C28 {
    constructor(a30, a31) {
        a30?.[1858];
    }
}
const v33 = new C28(v7, v26);
const v34 = v33.constructor;
try { new v34("3"); } catch (e) {}
for (let v36 = 0; v36 < 250; v36++) {
    v36++;
    v36--;
}
gc();
