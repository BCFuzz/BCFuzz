for (let i14 = (() => {
        function f0() {
        }
        class C1 {
        }
        const v4 = new Float64Array(257);
        for (const v5 of v4) {
            const v6 = new Float64Array(C1, v5, v5);
            const v8 = new Uint16Array();
            const v9 = new C1();
            v9[Symbol.iterator] = f0;
            try { v6(...v8, ...v8, ...v9); } catch (e) {}
        }
        return 0;
    })();
    i14 < 21768;
    i14++) {
}
gc();
