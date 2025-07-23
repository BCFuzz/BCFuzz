let v1;
try { v1 = undefined.isSafeInteger(undefined, undefined, undefined); } catch (e) {}
const v2 = `
    class C3 {
        static {
            switch (C3) {
                case v1:
                    break;
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v2);
gc();
