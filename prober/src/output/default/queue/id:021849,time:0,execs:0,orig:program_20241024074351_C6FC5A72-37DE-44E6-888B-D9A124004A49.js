ReferenceError.stackTraceLimit = ReferenceError;
for (let i4 = 0, i5 = 10;
    (() => {
        i5--;
        class C7 {
            #toString(a9) {
            }
            constructor(a11) {
                try {
                    (58766).#toString();
                } catch(e13) {
                }
            }
        }
        new C7();
        return i4 < i5;
    })();
    ) {
}
gc();
