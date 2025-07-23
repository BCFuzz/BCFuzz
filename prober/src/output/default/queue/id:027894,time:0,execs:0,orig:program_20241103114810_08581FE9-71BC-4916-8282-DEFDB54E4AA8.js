const v2 = `
    switch ("n") {
        case Float32Array:
            function f3() {
                return f3;
            }
            function f4() {
                return "n";
            }
            function F5() {
                if (!new.target) { throw 'must be called with new'; }
            }
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function F11(a13, a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f17() {
                return f3;
            }
            function f18() {
                return f18;
            }
            function F19() {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f21(a22, a23) {
                return f21;
            }
            function f24(a25, a26) {
                return f3;
            }
            function f27(a28, a29) {
                return Float32Array;
            }
            function f30() {
                return f3;
            }
            function f31(a32, a33) {
                return f27;
            }
            function F34(a36, a37, a38, a39) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f40(a41, a42) {
                return f24;
            }
            function f43() {
                return f3;
            }
            function f44(a45, a46, a47) {
                return a45;
            }
            break;
    }
`;
eval(v2);
gc();
