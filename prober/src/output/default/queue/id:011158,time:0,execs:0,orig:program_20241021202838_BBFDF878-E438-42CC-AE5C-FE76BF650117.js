const v0 = `
    const v1 = [-1221424748,5343,-4096,4294967295,18702,536870912,52358,25416,-1949612892];
    const v2 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
    v2.__proto__ = v1;
    new Uint8Array(v2);
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        this.valueOf()?.constructor;
    }
`;
for (let v13 = 0; v13 < 10; v13++) {
    function f14() {
        return v0;
    }
    class C15 extends f14 {
    }
    new C15();
}
eval(v0);
gc();
