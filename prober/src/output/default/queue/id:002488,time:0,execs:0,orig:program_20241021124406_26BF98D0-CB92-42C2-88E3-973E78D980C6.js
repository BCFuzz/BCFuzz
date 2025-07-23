const v1 = [Int8Array,Int8Array];
const v2 = `
    class C3 {
        #a;
        [v1] = Int8Array;
    }
    new C3();
`;
eval(v2);
gc();
