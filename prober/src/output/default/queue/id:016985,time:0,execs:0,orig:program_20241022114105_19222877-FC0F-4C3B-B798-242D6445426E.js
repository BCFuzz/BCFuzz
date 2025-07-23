const v0 = `
    const v3 = -60258 >>> -60258;
    const v6 = BigUint64Array(3669);
    function* f7(a8, a9) {
        yield* v6;
        return a9;
    }
    BigUint64Array[Symbol.iterator] = f7;
    BigUint64Array(BigUint64Array);
    -52.56761135808267 >>> v3;
`;
v0.normalize("NFKC");
gc();
