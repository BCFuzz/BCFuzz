const o0 = {
};
for (let v1 = 0; v1 < 5; v1++) {
    const v2 = /[x\dz]/mdvgis;
    class C3 {
        constructor(a5, a6, a7) {
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                v2 instanceof C3;
            }
            const v14 = new F8();
            const v15 = new F8(v14, v2, v14);
            const t12 = v15.constructor;
            new t12();
            const v18 = new F8(v2, o0, C3);
            const t15 = v18.constructor;
            new t15(v2, a5, v1);
            const t17 = v18.constructor;
            new t17();
        }
    }
    new C3();
    const v24 = new C3(o0, v1, C3);
    o0.__proto__ = v2;
    const t24 = v24.constructor;
    new t24();
}
gc();
