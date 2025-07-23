const o0 = {
};
const v1 = `
    const v2 = /\u{12345}/myvis;
    async function* f3(a4, a5) {
        const v7 = [a5,a5,a5];
        Reflect.apply(v2.exec, o0, v7);
        return v1;
    }
`;
eval(v1);
gc();
