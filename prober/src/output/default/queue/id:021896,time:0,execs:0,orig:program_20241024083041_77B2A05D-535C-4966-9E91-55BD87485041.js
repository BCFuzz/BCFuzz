const v1 = `
    const v3 = Symbol.for(v1);
    const v4 = v3.description;
    1000 !== 1000;
    class C8 {
    }
    const v9 = C8.__defineGetter__;
    try { v9(-585.4260689802231); } catch (e) {}
    const v11 = new C8();
    new C8();
    new C8();
    new Int16Array(Symbol, v9);
    [-64723,1073741823,52511];
    new Uint8Array();
    function F18() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v20 = F18.__defineSetter__;
    const v21 = new F18();
    const v22 = v21.__defineGetter__;
    let v23;
    try { v23 = v22(); } catch (e) {}
    let v24;
    try { v24 = v23(); } catch (e) {}
    function F25(a27, a28, a29, a30) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v31 = new F25();
    v31 > -585.4260689802231;
    new F25();
    const v34 = [-920.1554020279192,-6.343883811472592,2.220446049250313e-16,1000000.0,1000.0,-5.0,-955145.4628925493,2.220446049250313e-16];
    v34[7] = v34;
    class C35 {
    }
    const v36 = new C35();
    const v37 = v36.__defineSetter__;
    C8.__lookupSetter__;
    class C39 {
    }
    v36.constructor.__defineGetter__.apply;
    new C35();
    const o45 = {
        [v4]: undefined,
    };
    class C46 extends C35 {
    }
    const v47 = new C46();
    const t47 = v47.constructor;
    new t47();
    const t49 = v47.constructor;
    new t49(v4, v3);
    const v52 = v47.constructor;
    const v53 = new v52(F25, Int16Array);
    const t53 = v53.constructor;
    new t53();
    const v56 = new v52(v24, v11);
    const t56 = v56.constructor;
    new t56();
    const v59 = new C46();
    v59.constructor;
    const v61 = new C46();
    v61.constructor;
    class C63 {
    }
    const v64 = C63.apply;
    try { v64(v64, v64, C8); } catch (e) {}
    const v66 = new C63();
    const t67 = v66.constructor;
    const v68 = new t67();
    const v69 = v68.constructor;
    new v69(v69, v69, v20, v1);
    class C72 {
    }
    const v73 = new C72();
    const t74 = v73.constructor;
    const v75 = new t74();
    let v77 = -4.0;
    const v78 = --v77;
    Math.log2(v24);
    v78 - v77;
    v75.constructor;
    v75.constructor;
    const v83 = new C72();
    const t83 = v83.constructor;
    const v85 = new t83();
    v85.constructor;
    const v87 = new C63();
    v87.constructor;
    const v89 = new Uint16Array();
    v89.sort(v37);
    const v91 = new C72();
    v91.propertyIsEnumerable(C35, v83);
    const v94 = new Set();
    try { v94.forEach(); } catch (e) {}
`;
eval(v1);
gc();
