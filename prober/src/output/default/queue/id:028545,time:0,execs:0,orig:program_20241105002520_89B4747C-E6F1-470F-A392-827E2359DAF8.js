const v1 = `
    async function* f2(a3, a4) {
        const v6 = new Uint16Array(a3);
        const v8 = new Int16Array();
        const v9 = new Int32Array();
        const v10 = [2140066330,16536,21259,-65536,214261518,9223372036854775807];
        const v11 = [-64723,1073741823,52511];
        const v12 = [-4096];
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v17 = new F13();
        const v18 = new F13();
        const v19 = v18.constructor;
        new v19(v6, v11, v9, v9);
        function F21(a23, a24, a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v27 = new F21();
        let v28;
        try { v28 = v27.constructor(v8, v1, F21, v27, Int32Array); } catch (e) {}
        const v29 = new F21(v11);
        const v30 = [-920.1554020279192,-6.343883811472592,2.220446049250313e-16,1000000.0,1000.0,-5.0,-955145.4628925493,2.220446049250313e-16];
        const v31 = [-1.1404426593387361e+308,336421.1868685689,2.0,-1.7976931348623157e+308,0.7545170436722216];
        const v32 = [3.0,-1e-15,-632435.9238676995,1000000.0];
        const v33 = v32.keys();
        class C34 {
        }
        const v35 = new C34();
        const v36 = v35.__lookupSetter__;
        let v37;
        try { v37 = v36(v1, v36, Int32Array, v1, v12); } catch (e) {}
        const v38 = v35.constructor;
        const v39 = new v38(a3);
        let v40;
        try { v40 = v39.__defineSetter__(Int32Array); } catch (e) {}
        const v41 = new C34();
        const v42 = v41.__defineSetter__;
        let v43;
        try { v43 = v42(C34); } catch (e) {}
        const v44 = new C34();
        const t41 = v44.constructor;
        const v46 = new t41(v40, v17);
        const v47 = v46.constructor;
        const v48 = new v47(v1, v28, v47);
        function f49() {
            return f49;
        }
        function f50() {
            return v44;
        }
        class C51 extends C34 {
        }
        const v52 = new C51();
        const t54 = v52.constructor;
        new t54(f49, Int16Array);
        const v55 = v52.constructor;
        v55.name = v55;
        const t58 = v52.constructor;
        const v57 = new t58();
        v57.constructor;
        const v59 = new C51();
        const v60 = v59.constructor;
        const v61 = new C51();
        const t64 = v61.constructor;
        new t64();
        let v64 = 16;
        v64--;
        class C66 {
        }
        const v67 = C66.apply;
        let v68;
        try { v68 = v67(v12); } catch (e) {}
        const v69 = new C66();
        const v70 = new C66();
        const t75 = v70.constructor;
        const v72 = new t75(v10, Int32Array, v12);
        const v73 = v72.constructor;
        const v74 = new C66();
        const t79 = v74.constructor;
        new t79();
        const v77 = v74.__defineSetter__;
        const v78 = new Uint16Array(v48, v77, v38);
        class C79 {
        }
        const v80 = new C79();
        const t86 = v80.constructor;
        const v82 = new t86();
        const t88 = v82.constructor;
        const v84 = new t88();
        function f85(a86) {
            return a86;
        }
        class C87 extends f85 {
        }
        try { v84.constructor(); } catch (e) {}
        const v89 = new C79();
        const t97 = v89.constructor;
        const v91 = new t97();
        const v92 = v91.constructor;
        new v92();
        const v94 = v8.__defineSetter__;
        try { v94(v29, v10); } catch (e) {}
        const v96 = new C66();
        let v97 = -4294967297;
        v97--;
        for (let i101 = 0, i102 = 10; i102--, i101 < i102;) {
        }
        const v110 = new Uint8Array(v18, v92, v19);
        for (const v111 in v110) {
        }
        const t111 = v96.constructor;
        const v113 = new t111(v40, v73, v9, Int32Array, v31);
        const v114 = v113.__defineSetter__;
        try { v114(); } catch (e) {}
        const v116 = v96.__defineGetter__;
        const v118 = new Uint32Array(v35, v68);
        const v119 = v118.length;
        let v120 = 934305.379841754;
        const v121 = new Uint16Array();
        try { v121.findLastIndex(v32); } catch (e) {}
        const v124 = ("n").lastIndexOf(v30);
        v124 + v124;
        const v126 = v46.__proto__;
        const t124 = v126.constructor;
        new t124();
        const t126 = "n";
        t126.toString = v70;
        const v129 = new Uint16Array(v78);
        const v130 = v129.sort();
        try { v130.join(v110, v126); } catch (e) {}
        for (let v132 = 0; v132 < 5; v132++) {
            d = v132;
        }
        yield;
        v120--;
        const v135 = v120 ^ v64;
        const t134 = Set.constructor;
        t134(v69);
        Set(v33);
        Set().forEach(f2, v43);
        ([-1.8858791461583273,9.41481700846682,3.680736438781666e+306,-585.5547084115362,0.7128048379506289,NaN,0.1194515126909852,-2.220446049250313e-16]).splice(v116, v135, v9, f2, v77, v37);
        ~v60;
        return Uint16Array(v64, v119);
    }
    f2(f2, f2);
`;
eval(v1).next();
gc();
