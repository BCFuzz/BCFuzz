const v0 = /[\[\]\{\}\(\)\%\^\ ](x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10*/di;
const v2 = [Date,Date,Date,Date,Date];
v2.toJSON = Date;
JSON.stringify(v2).search(v0);
gc();
