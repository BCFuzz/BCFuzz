const v1 = `
    const o4 = {
        set b(a3) {
        },
    };
`;
const v6 = v1.split(/[(?:a+)?]/su);
try { Int8Array.constructor(v6); } catch (e) {}
gc();
