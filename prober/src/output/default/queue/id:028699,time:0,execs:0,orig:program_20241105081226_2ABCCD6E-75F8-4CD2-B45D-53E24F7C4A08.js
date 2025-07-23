function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        (() => {
            i9--;
            const v11 = i8 < i9;
            function f13() {
                return 268435440n;
            }
            const v14 = [1073741824,-54735,-1073741824,129,9,256];
            v14[Symbol.toPrimitive] = f13;
            const v19 = new BigInt64Array(256);
            const v21 = createGlobalObject();
            v21.Atomics.xor(v19, v21, v14);
            return v11;
        })();
        ) {
    }
    for (let i30 = -3, i31 = 10; i30 < i31; i31--) {
    }
    for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
    }
}
new F0();
new F0();
gc();
