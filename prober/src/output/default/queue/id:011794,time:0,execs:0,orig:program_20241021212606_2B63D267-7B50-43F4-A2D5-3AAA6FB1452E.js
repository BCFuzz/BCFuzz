const v2 = new BigInt64Array(255);
const v5 = new BigUint64Array(172);
for (let i = 0; i < 5; i++) {
    const o6 = {
    };
    function f7() {
        let v8;
        try {
        const t0 = 172;
        v8 = t0(v2, ...v2, 172, 172, ...v5);
        } catch (e) {}
        return v8;
    }
    o6.valueOf = f7;
    -o6;
}
gc();
