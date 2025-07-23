const o5 = {
    toString(a3) {
        let v4;
        try { v4 = ("number").concat(this, -1.7976931348623157e+308); } catch (e) {}
        return v4;
    },
};
o5.toString(o5, "number");
gc();
