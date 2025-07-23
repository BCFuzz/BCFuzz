const v2 = new Float32Array(13085);
const v3 = `
    const v4 = delete v2[Float32Array];
    const o5 = {
    };
    o5.a = v4;
    /\u{12345}/myvis;
`;
const v7 = v3.repeat(13085);
try { v7.matchAll(v7); } catch (e) {}
gc();
