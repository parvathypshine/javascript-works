//request state  -   1(request not send) status=0
                    //  4(task completed) status=200-299
                    
                    
fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data))
