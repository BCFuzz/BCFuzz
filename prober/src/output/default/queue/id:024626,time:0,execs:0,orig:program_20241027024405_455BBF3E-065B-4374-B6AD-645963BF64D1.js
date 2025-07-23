const o0 = {
};
for (let v1 = 0; v1 < 5; v1++) {
    const v2 = /[x\dz]/mdvgis;
    class C3 {
        constructor(a5, a6, a7) {
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                o0 instanceof C3;
            }
            const v14 = new F8();
            const t11 = v14.constructor;
            new t11();
            const t13 = v14.constructor;
            const v18 = new t13();
            const t15 = v18.constructor;
            const v20 = new t15();
            new F8(o0, v20, v1);
        }
    }
    const v22 = new C3();
    const v23 = new C3(v2, v22, v22);
    o0.__proto__ = v2;
    for (let v24 = 0; v24 < 5; v24++) {
        for (let i26 = v1, i27 = 10; v24 < i27; i27--) {
        }
    }
    const t27 = v23.constructor;
    new t27(v23);
}
gc();
