const v0 = `
    class C1 {
        constructor(a3, a4) {
            a3?.[1858];
            try {
                super.fromEntries();
            } catch(e7) {
            }
        }
    }
    new C1(C1, C1);
    class C9 extends C1 {
        constructor(a11, a12) {
            [-65537,512,9223372036854775807,1000,129,16,-1373407466];
            function F14(a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v19 = F14();
            class C21 {
                #o(a23, a24) {
                }
            }
            const v25 = C21();
            const v26 = Int8Array(C21);
            let v27;
            try { v27 = v26.includes(); } catch (e) {}
            v25.getOwnPropertyNames(v19, v27);
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
}
gc();
