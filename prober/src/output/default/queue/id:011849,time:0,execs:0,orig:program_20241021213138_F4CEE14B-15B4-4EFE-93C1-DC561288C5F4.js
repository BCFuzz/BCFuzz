const v1 = new BigInt64Array();
const v4 = new BigUint64Array();
for (let i = 0; i < 5; i++) {
    function f5() {
        const t4 = 172;
        t4(v1, ...v1, 172, 172, ...v4);
        return f5;
    }
    try { f5.call(); } catch (e) {}
}
gc();
