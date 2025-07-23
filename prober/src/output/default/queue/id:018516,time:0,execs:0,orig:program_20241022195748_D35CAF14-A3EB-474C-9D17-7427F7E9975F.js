const v0 = `
    function f1() {
        return f1;
    }
    let v2;
    try { v2 = f1(); } catch (e) {}
    const v3 = v2.name;
    const v5 = new Int16Array(v3, v3, v3);
    const v6 = [2140066330,16536,21259,-65536,214261518,9223372036854775807];
    const v7 = [-64723,1073741823,52511];
    const v8 = [-4096];
    const v9 = v8[0];
    const v10 = v9 >>> v9;
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v15 = new F11();
    const v16 = v15.constructor;
    new v16();
    const v18 = v15.constructor;
    const v19 = new F11();
    v19.a = v19;
    function F20(a22, a23, a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v26 = new F20();
    const t26 = v26.constructor;
    const v28 = new t26();
    const t28 = v28.constructor;
    const v30 = new t28(f1, v2, v0, v18, v0);
    const v31 = new F20(v30, v26, v0, v30);
    const v32 = v31.constructor;
    new v32();
    const v34 = new F20(v7);
    const t34 = v34.constructor;
    const v36 = new t34(v34, v5);
    const v37 = [-920.1554020279192,-6.343883811472592,2.220446049250313e-16,1000000.0,1000.0,-5.0,-955145.4628925493,2.220446049250313e-16];
    const v38 = [-1.1404426593387361e+308,336421.1868685689,2.0,-1.7976931348623157e+308,0.7545170436722216];
    const v39 = [3.0,-1e-15,-632435.9238676995,1000000.0];
    const v40 = v39.keys();
    class C41 {
    }
    const v42 = new C41();
    const v43 = v42.constructor;
    const v44 = new v43(f1, v10);
    const v45 = v44.__lookupGetter__;
    let v46;
    try { v46 = v45(v32, v0); } catch (e) {}
    const v47 = v42.__lookupSetter__;
    v47.name = v47;
    const v48 = v42.constructor;
    const v49 = v48.__defineGetter__;
    const v50 = v49.apply;
    try { v50(); } catch (e) {}
    let v52;
    try { v52 = v49(); } catch (e) {}
    const v53 = new v48(v16, Int16Array, v0, v36);
    const t57 = v53.constructor;
    const v55 = new t57();
    const t59 = v55.constructor;
    new t59(v2, v0, v0, v0);
    let v58;
    try { v58 = v53.__defineSetter__(); } catch (e) {}
    const v59 = new C41(v38);
    const t64 = v59.constructor;
    const v61 = new t64(v0, v53);
    try { v61.constructor(); } catch (e) {}
    const v63 = new C41(v39);
    const v64 = v63.constructor;
    new v64();
    const t70 = v63.constructor;
    const v67 = new t70(v58);
    const v68 = v67.__lookupSetter__;
    try { v68(); } catch (e) {}
    const t74 = v67.constructor;
    new t74();
    class C72 extends C41 {
    }
    const v73 = new C72();
    const t79 = v73.constructor;
    const v75 = new t79();
    const v76 = v75.constructor;
    new v76();
    const v78 = v75.constructor;
    const v79 = new v78(v0, v78);
    const v80 = v79.__lookupSetter__;
    let v81;
    try { v81 = v80(v18); } catch (e) {}
    const v82 = v73.constructor;
    const v83 = new v82();
    const t90 = v83.constructor;
    new t90();
    const v86 = new C72();
    const v87 = v86.constructor;
    const v88 = new C72();
    const t95 = v88.constructor;
    const v90 = new t95();
    const t97 = v90.constructor;
    const v92 = new t97(v0, v7);
    const v94 = 16 >> 16;
    v94 | v94;
    class C96 {
    }
    const v97 = C96.apply;
    let v98;
    try { v98 = v97(v8, v40); } catch (e) {}
    const v99 = new C96();
    const v100 = new C96();
    const v101 = v100.__defineSetter__;
    try { v101(v46, v76, v64, v0); } catch (e) {}
    const t110 = v100.constructor;
    const v104 = new t110();
    const t112 = v104.constructor;
    new t112();
    const v107 = v104.constructor;
    const v108 = v107.toString;
    try { v108(); } catch (e) {}
    new v107();
    const v111 = new C96();
    const v112 = v111.__defineSetter__;
    const v114 = new Uint16Array(v90, 16);
    v114.sort(v82);
    const v116 = new Uint16Array();
    v116.sort(v98);
    class C118 {
    }
    const v119 = new C118();
    const t127 = v119.constructor;
    const v121 = new t127(v0, v112);
    const t129 = v121.constructor;
    const v123 = new t129(v42, v87);
    const t131 = v123.constructor;
    const v125 = new t131();
    const t133 = v125.constructor;
    new t133();
    const v128 = new C118();
    const v129 = v128.constructor;
    const v130 = v129.call;
    try { v130(v82, v40); } catch (e) {}
    const v132 = new v129();
    const v133 = v132.constructor;
    new v133();
    const t142 = v132.constructor;
    new t142();
    const v137 = v128.__defineSetter__;
    try { v137(v34, v6); } catch (e) {}
    const v139 = new C96();
    const v140 = v139.constructor;
    new v140(v16, v31, v78, v64, v140);
    const t149 = v139.constructor;
    const v143 = new t149();
    const t151 = v143.constructor;
    new t151(v0, v92, v9, v0, v16);
    const t153 = v143.constructor;
    new t153(v43, v0, v94, v0);
    const v148 = v139.__defineGetter__;
    let v149;
    try { v149 = v148(); } catch (e) {}
    const v151 = new Uint32Array(v26, v149);
    v151.length;
    let v153 = 934305.379841754;
    const v154 = v153 ^ v153;
    v154 >>> v154;
    const v156 = new Uint16Array(v133, v107, v48);
    v156.length = v156;
    const v158 = ("n").lastIndexOf(v37);
    v158 + v158;
    const t166 = "n";
    t166.toString = v100;
    const v160 = new Uint16Array();
    const v161 = v160.sort(v52);
    v153--;
    const v163 = v153 ^ 16;
    const v164 = v163 >>> v163;
    const v165 = v164 - v164;
    v165 >> v165;
    const v167 = new C118();
    const v168 = v167.propertyIsEnumerable(v108, v0, v81);
    !v168;
    const v170 = !v168;
    v170 && v170;
    const v173 = Set.constructor;
    v173.call(v161);
    try { v173(v99); } catch (e) {}
    const v176 = new Set(v5);
    try { v176.difference(v129, v0, v0, v75); } catch (e) {}
    const o178 = {
    };
    const v181 = ~([-1.8858791461583273,9.41481700846682,3.680736438781666e+306,-585.5547084115362,0.7128048379506289,NaN,0.1194515126909852,-2.220446049250313e-16])[7];
    const v182 = v181 + v181;
    v182 != v182;
    class C184 {
    }
`;
eval(v0);
gc();
