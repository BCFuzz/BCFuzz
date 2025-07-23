const v1 = [16,37822,-60486934,2086949201,1053840339];
const v2 = `
    class C3 {
    }
    const v4 = new C3();
    const o5 = {
    };
    o5.d = o5;
    for (let v6 = 0; v6 < 5; v6++) {
        const v9 = new Int16Array(4096);
        for (const v10 of v9) {
            Symbol.iterator.description;
            Symbol.toPrimitive.description;
            const t11 = [-657282.1744253006,-1000000000.0,1000000.0,-5.265122766109179e+307,-9.411272132205754,0.09470655359821845,-5.0,-542723.1325447795,940.1620457096399,-0.0];
            delete t11.length;
        }
        function F18(a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v22 = new F18();
        let v23;
        try { v23 = v22.hasOwnProperty(); } catch (e) {}
        class C24 {
        }
        const v25 = v1[v4];
        try { v23(v25); } catch (e) {}
    }
`;
eval(v2);
gc();
