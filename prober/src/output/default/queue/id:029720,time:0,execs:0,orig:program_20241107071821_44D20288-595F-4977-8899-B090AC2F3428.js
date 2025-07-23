for (let [i19, i20] = (() => {
        const o6 = {
            ["eC"](a3, a4) {
                URIError.stackTraceLimit = URIError;
            },
        };
        o6.eC();
        for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
        }
        return [0, 10];
    })();
    i19 < i20;
    (() => {
        i20--;
        function f25(a26) {
            return a26;
        }
        class C27 extends f25 {
            #m(a29, a30) {
            }
        }
        for (let v31 = 0; v31 < 5; v31++) {
            const v32 = new C27();
            const v33 = v32.constructor;
            try { new v33(C27); } catch (e) {}
        }
    })()) {
}
gc();
