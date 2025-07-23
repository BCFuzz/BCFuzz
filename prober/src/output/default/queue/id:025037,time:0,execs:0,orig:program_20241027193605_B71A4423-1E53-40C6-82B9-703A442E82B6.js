const v0 = `
    for (let v1 = 0; v1 < 5; v1++) {
        class C2 {
        }
        C2.toString();
        const v4 = new C2();
        v4.constructor;
        const t6 = v4.constructor;
        const v7 = new t6(v0);
        v7.__defineSetter__;
        v4.constructor.name.includes;
        const v12 = v4.constructor;
        try { v12.apply(v0, v7, v4, v12); } catch (e) {}
        const v14 = new v12();
        v14.propertyIsEnumerable;
        const v16 = v4.constructor;
        v16.toString();
        try { v16.call(); } catch (e) {}
    }
`;
eval(v0);
gc();
