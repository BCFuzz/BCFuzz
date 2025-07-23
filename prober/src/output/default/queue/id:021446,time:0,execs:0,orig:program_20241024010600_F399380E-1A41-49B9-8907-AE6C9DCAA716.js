for (let v1 = 0; v1 < 5; v1++) {
    class C3 {
    }
    const v4 = new C3();
    const v5 = [257];
    const v6 = [536870888,-47415,2058381765,140353371,2147483648,-9007199254740992];
    class C7 {
    }
    const v8 = new C7();
    const v9 = [1073741824,-4294967296];
    function F12(a14, a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v17 = new F12();
    const v18 = v17.length;
    const v19 = new F12(v18, 2147483647n, 2147483647n);
    function f20() {
        return C3;
    }
    const v21 = `
        const v23 = ("-13").substring;
        try { v23("-13", v23); } catch (e) {}
        const v25 = ("-13")[undefined];
        const o26 = {
            __proto__: v18,
            1073741825: v18,
            ...undefined,
        };
        o26.h = v8;
        new WeakSet(v25);
        function F29() {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F29();
        function F32(a34) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v35 = new F32(F29);
        v35.constructor = f20;
        v35.constructor;
        const o37 = {
        };
        Object.defineProperty(o37, "f", { configurable: true, value: 2147483647n });
        function f39(a40, a41) {
            return v17;
        }
        function f42() {
            return f42;
        }
        f39[Symbol.toPrimitive] = f42;
        f39.d = f39;
        const v45 = f39(v25, v17);
        const v46 = v45.__defineSetter__;
        try { v46(v21, BigUint64Array); } catch (e) {}
        try { v46(v6, v5); } catch (e) {}
        const v49 = v45.constructor;
        const v50 = v49.toString();
        let v51;
        try { v51 = v49(v25, Uint32Array, f39); } catch (e) {}
        const v52 = v51?.constructor;
        try { v52.apply(); } catch (e) {}
        let v54;
        try { v54 = v52(F12, F12); } catch (e) {}
        const v55 = v54?.constructor;
        try { v55(v54, v4); } catch (e) {}
        const v57 = v51?.constructor;
        try { v57(); } catch (e) {}
        let v59;
        try { v59 = v57(f39); } catch (e) {}
        let v60;
        try { v60 = v59.valueOf(); } catch (e) {}
        const v61 = f39(undefined, v19);
        try { v61.__defineSetter__(C3, v61, C3); } catch (e) {}
        const v63 = v61.constructor;
        try { v63(BigUint64Array, v18, BigUint64Array); } catch (e) {}
        try { v63.apply(v45); } catch (e) {}
        const v66 = new v63(v50, v60);
        const v67 = v66.constructor;
        let v68;
        try { v68 = v67(Uint32Array, Uint32Array); } catch (e) {}
        const v69 = v68?.constructor;
        try { v69(v9, v57, v8); } catch (e) {}
        v61.propertyIsEnumerable();
        f39(v45, v17);
        const v75 = new Int8Array(128);
        for (const v76 in v75) {
            for (let v77 = 0; v77 < 5; v77++) {
            }
        }
        for (let v78 = 0; v78 < 10; v78++) {
            for (let v79 = 0; v79 < 5; v79++) {
                for (let v80 = 0; v80 < 5; v80++) {
                }
                class C81 {
                }
                class C82 extends C81 {
                }
                for (let v83 = 0; v83 < 5; v83++) {
                }
            }
        }
        function F84() {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F84();
        let v87 = 0;
        do {
            v87++;
        } while ((() => {
                function F90(a92, a93) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                return v87 < 2;
            })())
    `;
    eval(v21);
}
gc();
