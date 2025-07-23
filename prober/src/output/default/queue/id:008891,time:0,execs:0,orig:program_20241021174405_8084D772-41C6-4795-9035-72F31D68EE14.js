const v1 = `
    class C2 {
    }
    class C3 extends C2 {
        constructor(a5, a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                C3.__proto__ = -1119334180n;
                [];
                for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
                }
                Boolean(a9);
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v1);
const o27 = {
};
for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
}
gc();
