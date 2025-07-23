const v1 = new BigInt64Array();
for (let v2 = 0; v2 < 5; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v5 = 0; v5 < 25; v5++) {
            const v6 = /\p{gc=Nd}/mis;
            const v7 = v1 !== v2;
            const v9 = ~v7;
            v7 >>> 1196296782;
            v9 ** v7;
            v6.test(v6);
        }
    }
    new F3();
}
gc();
