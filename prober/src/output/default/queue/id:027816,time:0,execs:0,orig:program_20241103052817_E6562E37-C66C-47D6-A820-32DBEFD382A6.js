const v1 = /[\118]/myis.toString();
const v4 = new Int8Array(44485);
const o6 = {
    [v4]: v1,
    [v1]() {
    },
};
JSON.stringify(o6);
gc();
