let v6;
try { v6 = BigUint64Array(); } catch (e) {}
function F8(a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F8();
const v12 = v11.__defineSetter__;
class C13 extends F8 {
}
const v14 = new C13();
const v16 = v11 <= v14;
const v17 = v16 && v16;
const v19 = Number.isNaN();
function f20() {
    function f21() {
    }
    const v22 = v12();
    const v23 = f21();
    function F25(a27, a28, a29) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v30 = F25();
    const v31 = F25();
    const v35 = `
        const v37 = ("-13")[undefined];
        const o38 = {
        };
        o38.h = o38;
        o38.h = v37;
        const o39 = {
        };
        o39.h = v37;
        o39.e = v37;
        const o40 = {
        };
        o40.h = o40;
        o40.h = v37;
        Uint32Array.d = Uint32Array;
        function f42(a43, a44) {
            a44.length;
            const v46 = (16)?.constructor;
            let v47;
            try { v47 = new v46(a43, Uint32Array, a43); } catch (e) {}
            v47?.constructor;
            try { new v17(v47, v22, o39); } catch (e) {}
            const o50 = {
                "e": a44,
            };
        }
        const v51 = f42(v37, v30);
        f42(undefined, v31);
        f42(v51, v30);
        const v56 = Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect,Reflect]);
        try { v56.fill(v23); } catch (e) {}
        const v58 = v56.reverse();
        const v59 = v14?.forEach;
        try { new v59(v58); } catch (e) {}
        v19.e = v37;
        o40.a = v35;
        const o61 = {
        };
        o61.c = o61;
        o61.h = o61;
        o61.h = v37;
        o61.e = v37;
        o61.d = 512;
        class C62 {
            [-1] = 7;
            static [7];
            static a = "-13";
            static #c;
            [512];
        }
        v6[7] = C62;
        try { new C62(); } catch (e) {}
    `;
}
gc();
