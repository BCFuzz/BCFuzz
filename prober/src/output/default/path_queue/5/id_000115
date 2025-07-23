const v0 = `
    async function* f1(a2, a3) {
        function F4(a6) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v8 = ([f1,f1,f1,f1,f1]).pop();
        typeof v8;
        new F4(11, v8);
        return f1;
    }
    f1();
`;
eval(v0).next();
gc();
