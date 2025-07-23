const v0 = `
    /\u{12345}/myvis;
    class C3 extends Uint8Array {
    }
    for (let i6 = -3, i7 = 10; i6 < i7; i7--) {
    }
    function F14(a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v19 = [303537114,-4294967297,1000];
    const v20 = [-1,9,4294967296,65536,10,49592,10];
    const v22 = [];
    const v24 = Reflect.apply(v19.sort, v20, v22);
    v24[986] = C3;
    v24.join(Reflect).replace(F14);
`;
eval(v0);
gc();
