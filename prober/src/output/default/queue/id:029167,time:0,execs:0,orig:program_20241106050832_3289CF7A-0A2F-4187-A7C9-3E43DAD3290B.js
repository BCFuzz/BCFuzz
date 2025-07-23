for (let [i9, i10] = (() => {
        const o6 = {
            ["eC"](a3, a4) {
                URIError.stackTraceLimit = URIError;
            },
        };
        o6.eC();
        return [0, 10];
    })();
    i9 < i10;
    (() => {
        i10--;
        function f15(a16) {
            return a16;
        }
        class C17 extends f15 {
            #b;
        }
        for (let v18 = 0; v18 < 5; v18++) {
            const v19 = new C17();
            const v20 = v19.constructor;
            try { new v20(C17); } catch (e) {}
        }
    })()) {
}
gc();
