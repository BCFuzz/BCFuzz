const v2 = new BigInt64Array();
const v3 = `
    const v4 = [v3];
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        let v9 = a8.search(v4);
        const v10 = v9--;
        v10 | v10;
    }
    [5,F5,v2];
    new F5(v3, v3);
    const v15 = new WeakSet();
    v15.add(v15);
    new BigUint64Array();
    /\u{12345}/myvis;
    function F20(a22, a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
        function F25() {
            if (!new.target) { throw 'must be called with new'; }
            this?.constructor;
            for (const v31 in Uint8Array()) {
                const v33 = -(-6 >>> v31);
                v33 * v33;
            }
        }
    }
`;
eval(v3);
gc();
