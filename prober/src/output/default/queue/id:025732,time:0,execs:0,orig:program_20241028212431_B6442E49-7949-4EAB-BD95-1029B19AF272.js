const v0 = [58.57435970650886,1.7976931348623157e+308];
const v2 = `
    const v4 = Symbol.toPrimitive;
    const o10 = {
        [v4]() {
            class C6 {
                static o(a8) {
                    v0.#m();
                }
            }
        },
    };
    /\u{12345}/myvis;
`;
const v12 = v2.split();
try { v12.flatMap(eval); } catch (e) {}
gc();
