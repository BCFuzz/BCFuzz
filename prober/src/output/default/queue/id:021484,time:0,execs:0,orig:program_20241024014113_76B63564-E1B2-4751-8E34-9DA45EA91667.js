const v0 = `
    const o4 = {
        toString(a2) {
            /7\xed\xa0\x80/vs;
            return this;
        },
    };
`;
v0.normalize("NFKC");
gc();
