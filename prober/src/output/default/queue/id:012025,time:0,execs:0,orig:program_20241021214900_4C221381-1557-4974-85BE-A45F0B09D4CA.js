function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 {
        }
        class C8 extends C7 {
        }
        Object.defineProperty(C7, 2, { value: NaN });
    }
    new F2();
}
new F0();
for (let i25 = (() => {
        function f11() {
            return F0;
        }
        class C12 {
        }
        const v15 = new Float64Array(257);
        for (const v16 of v15) {
            const v17 = new Float64Array();
            const v19 = new Uint16Array(v17, 257, v16);
            const v20 = new C12();
            v20[Symbol.iterator] = f11;
            try { v17(...v19, ...v19, ...v20); } catch (e) {}
        }
        return 0;
    })();
    i25 < 21768;
    i25++) {
}
gc();
