function f0() {
    const v4 = [-4096];
    const v6 = new BigInt64Array();
    delete v4[v6];
    const o16 = {
        o(a9, a10) {
            const v12 = gc();
            const v13 = ("object")[1073741824];
            [v12,"object",["valueOf",a10,a9,v13],"object",v13];
        },
    };
}
("number").search(f0);
gc();
