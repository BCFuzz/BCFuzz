const v0 = `
    async function* f1(a2, a3) {
        const v4 = a3.substring;
        let v5;
        try { v5 = v4(); } catch (e) {}
        let v8;
        try { v8 = Uint8Array(v4); } catch (e) {}
        const v9 = new Uint8Array(v4);
        try { v9.indexOf(a2, a2); } catch (e) {}
        const v12 = new Int32Array();
        try { v12.with(a3, v8); } catch (e) {}
        class C14 {
        }
        const v15 = C14.name;
        try { v15.replaceAll(v0); } catch (e) {}
        try { C14.call(v15, v0, Int32Array, v5, v0); } catch (e) {}
        Uint8Array.c = Uint8Array;
        const v18 = new Uint8Array();
        for (const v19 in v18) {
        }
        const o21 = {
            ..."61180",
        };
        let v22 = o21[0];
        const v24 = new Uint8Array(3129);
        for (const v25 in v24) {
            Math.clz32(v22);
            ++v22;
        }
        try { v4(); } catch (e) {}
        for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
        }
        const v40 = [BigInt64Array];
        try { v40.slice(v5, v22); } catch (e) {}
        const v42 = new BigInt64Array();
        for (const v43 of v42) {
        }
        const v44 = v40.pop();
        try { v44.apply(Uint8Array, v0); } catch (e) {}
        const v46 = v44.__defineSetter__;
        let v47;
        try { v47 = v46(o21); } catch (e) {}
        try { v46(v42, f1, v47, v18); } catch (e) {}
        try { v46(); } catch (e) {}
        let v50;
        try { v50 = a2.substring(Uint8Array, 3129, o21); } catch (e) {}
        try { v50.big(); } catch (e) {}
        const v52 = [14,-3,-2,3,1024,4294967295,9223372036854775807];
        const v53 = v52.map;
        try { v53(); } catch (e) {}
        for (const v55 of v52) {
        }
        let v56;
        try { v56 = a3.at(); } catch (e) {}
        try { v56.fixed(v44, f1); } catch (e) {}
        let v58;
        try { v58 = v56.toLocaleUpperCase(v0); } catch (e) {}
        try { v58.match(); } catch (e) {}
        return f1;
    }
    f1(v0, v0);
`;
for (let i63 = 0, i64 = 10; i63 < i64; i64--) {
    for (let i73 = 0, i74 = 10; i73 < i74; i74--) {
    }
}
eval(v0).next();
gc();
