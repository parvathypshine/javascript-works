var courses=[
    {cname:"django",fee:35000,durasion:5,teqs:[
        "python","javascript",,"html","css","bootstrap","django","angular"
    ]},
    {cname:"MEARN",fee:55000,durasion:6,teqs:[
    "javascript","html","css","bootstrap","node","express","angular","react"
    ]},
    {cname:"bigdata",fee:75000,durasion:7,teqs:[
        "python","pig","hive","sqoop","pyspark","ml"
    ]},
    {cname:"ASP.net",fee:35000,durasion:5,teqs:[
        "c#","javascript",,"html","css","bootstrap"
    ]},

]
// courses.map(c=>c.cname).forEach(n =>console.log(n))
    
// courses.filter(x=>x.fee>45000).forEach(n=>console.log(n.cname))

// var costly=courses.reduce((c1,c2)=>c1.fee<c2.fee?c2:c1)
// console.log(costly);

// courses.sort((c1,c2)=>c2.durasion-c1.duration).forEach(n=>console.log(n.cname))

//on;y bigdarta print

// var bdata=courses.find(c=>c.cname=="bigdata")
// console.log(bdata);

// var isAvailable=courses.some(c=>c.cname=="testing")
// console.log(isAvailable);

// var arr=[10,11,12]
// console.log(arr.includes(10));

//  courses.filter(c=>c.teqs.includes("javascript")).forEach(c=>console.log(c.cname))