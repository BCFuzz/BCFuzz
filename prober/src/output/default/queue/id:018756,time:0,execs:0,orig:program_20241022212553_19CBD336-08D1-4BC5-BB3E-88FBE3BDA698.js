function f0() {
    return f0;
}
const v2 = `
    function f3() {
        return f3;
    }
    const v6 = new Int16Array(208, 208, 208);
    const v8 = v6["reduce"](f3, 208);
    const v9 = v8 | v8;
    const v10 = [-64723,1073741823,52511];
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v15 = new F11();
    v15.length;
    const v17 = new F11("reduce", f0);
    v17.a = v17;
    function F18(a20, a21, a22, a23) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v24 = new F18(v2, f0, v2, f0);
    const v25 = v24.constructor;
    new v25(v24);
    const v27 = new F18(v17, v6);
    v27.b = v27;
    const v28 = new F18(v10);
    const t27 = v28.constructor;
    const v30 = new t27(v28, v28, v9);
    const v31 = [-1.1404426593387361e+308,336421.1868685689,2.0,-1.7976931348623157e+308,0.7545170436722216];
    const v32 = [3.0,-1e-15,-632435.9238676995,1000000.0];
    v32.push(v15, f0, v32);
    const v34 = v32.keys();
    const v35 = v34.propertyIsEnumerable;
    try { v35(v34, Int16Array, Int16Array, v24); } catch (e) {}
    class C37 {
    }
    const v38 = C37.__defineSetter__;
    try { v38(); } catch (e) {}
    const v40 = new C37();
    const v41 = v40.constructor;
    const v42 = new v41(v41, v24);
    const v43 = v40.__lookupSetter__;
    let v44;
    try { v44 = v43(f0); } catch (e) {}
    const v45 = v40.constructor;
    const v46 = v45.__defineGetter__;
    let v47;
    try { v47 = v46(v46); } catch (e) {}
    const v48 = new v45();
    const v49 = v48.__defineSetter__;
    let v50;
    try { v50 = v49("undefined", "undefined"); } catch (e) {}
    let v51;
    try { v51 = v48.__defineSetter__(208); } catch (e) {}
    const v52 = new C37(v31);
    const t56 = v52.constructor;
    new t56(v30, v41, f0);
    const v55 = new C37();
    function f57(a58, a59, a60) {
        a60.g = eval;
        return v42;
    }
    const v61 = v55.constructor;
    new v61(v61, v43);
    const o64 = {
    };
    o64.toString(o64, "number", o64);
    o64.toString();
    const v67 = v55.constructor;
    const v68 = new v67(v51);
    const v69 = v68.constructor;
    new v69();
    const v71 = v68.propertyIsEnumerable;
    try { v71(C37, "reduce", v71); } catch (e) {}
    class C73 extends C37 {
    }
    const v74 = new C73();
    const v75 = v74.constructor;
    const v76 = new v75(v75);
    const t80 = v74.constructor;
    new t80();
    const t82 = v74.constructor;
    const v80 = new t82(v25, v44);
    const v81 = v80.constructor;
    const v82 = new v81(v69, C37, v50);
    v82.hasOwnProperty("undefined", v2, v41, v82);
    const v84 = v74.constructor;
    const v85 = new v84(v81);
    const v86 = v85.constructor;
    try { v86.call("undefined", f0, v86); } catch (e) {}
    const v88 = new C73();
    const v89 = v88.constructor;
    new v89();
    const v91 = v88.constructor;
    new v91(v91, v67);
    new C73();
    class C94 {
    }
    try { C94(); } catch (e) {}
    const v96 = C94.apply;
    const v97 = v96.apply;
    try { v97(); } catch (e) {}
    const v99 = v96.call;
    let v100;
    try { v100 = v99(); } catch (e) {}
    try { v96(v100, v76, v6, v100, v2); } catch (e) {}
    const v102 = new C94();
    const v103 = v102.constructor;
    new v103(C73, v103, v38, v84, v103);
    const v105 = new C94();
    const v106 = v105.constructor;
    const v107 = new v106(f0, v106, "undefined", v38, v106);
    const t113 = v107.constructor;
    const v109 = new t113(v89, C94);
    const v110 = v109.constructor;
    new v110(v110, "number", v96);
    const v112 = v109.constructor;
    let v113 = -11n;
    v113--;
    try { v112(f0); } catch (e) {}
    new C94();
    const v118 = new BigUint64Array("undefined", v67);
    for (const v119 of v118) {
    }
    const v121 = new Set("undefined");
    const v122 = v121.isSubsetOf;
    try { v122.call(v2, v122, v74, v47, v2); } catch (e) {}
`;
eval(v2);
gc();
