class C1 {
}
const v2 = new C1();
const v4 = `
    const v5 = [v4,v2,"d",v4];
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        let v10 = a9.search(v5);
        const v11 = v10--;
        v11 | v11;
    }
    [5,F6];
    new F6(v4, v4);
    /\u{12345}/myvis;
`;
eval(v4);
gc();
