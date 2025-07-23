for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    const v11 = [-307557303,4096,-1176028411,9007199254740990,63960,0,-16,1073741823,0];
    class C12 {
    }
    if (!(v11 <= C12)) {
        function f14() {
            return f14;
        }
        let v15 = f14();
        f14();
        v15-- && 10;
        function f20() {
            return f20;
        }
    }
`;
eval(v10);
gc();
