const v1 = `
    /\u{12345}/isu;
    const o5 = {
        set b(a4) {
        },
    };
`;
const v7 = v1.split(/[(?:a+)?]/su);
try { Int8Array.constructor(v7); } catch (e) {}
gc();
