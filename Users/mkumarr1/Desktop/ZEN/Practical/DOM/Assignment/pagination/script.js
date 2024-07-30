function createTH(tag,scope,val,content) {
    var th_tag=document.createElement(tag);
    th_tag.setAttribute(scope,val);
    th_tag.innerHTML=content
    return th_tag
}

function create_row(id,name,email){
    var row_tr = document.createElement("tr")
    var row_td1 = document.createElement("td")
    var row_td2 = document.createElement("td")
    var row_td3 = document.createElement("td")
    
    row_td1.innerHTML = id
    row_td2.innerHTML = name
    row_td3.innerHTML = email

    row_tr.append(row_td1,row_td2,row_td3);
    // row_tr.append(row_td2);
    // row_tr.append(row_td3);

    tbody.append(row_tr)
    
}



var container= document.createElement("div")
container.className="container"


var table= document.createElement("table")
table.className="table"

var thead= document.createElement("thead")
thead.id="theader"

var tr1= document.createElement("tr")

var th1=createTH("th","scope","col","ID")
var th2=createTH("th","scope","col","Name")
var th3=createTH("th","scope","col","Email")

var tbody = document.createElement("tbody")
tbody.setAttribute("id","table-body")

var pagination = document.createElement("div")
pagination.setAttribute("id","pagination-wrapper");
pagination.classList.add("container","buttons")




tr1.append(th1,th2,th3);
thead.append(tr1)
table.append(thead,tbody)

container.append(table)
document.body.append(container,pagination)


// console.log(create_row(1,'Mukesh','mukesh@gmail.com'));
// create_row(1,'Mukesh','mukesh@gmail.com')



// ==================================

var request= new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    var length=res.length;
    // console.log(res);
    var data = {
        "queryset":res,
        "page":10,
        "rows":5,
        "window":5
    };
    
    buildTable()
  
    function pagination(queryset,page,rows){
        let trimStart= (page - 1) * rows
        let trimEnd = trimStart + rows;
        let trimedData = queryset.slice(trimStart,trimEnd)
        let pages = Math.ceil(length / rows)
        // console.log(trimStart,trimEnd,pages,trimedData);
        return{
           "queryset": trimedData,
           "pages" : pages
        }
    }

    function pageButtons(pages){
        var wrapper = document.getElementById("pagination-wrapper")
        wrapper.innerHTML=''
        let maxLeft = (data.page - Math.floor(data.window /2))
        let maxRight = (data.page + Math.floor(data.window /2))

        if(maxLeft < 1){
            maxLeft = 1
            maxRight=data.window
        }
        if(maxRight > pages){
            maxLeft = pages - (data.window-1)
            maxRight=pages
            if(maxLeft < 1){
                maxLeft=1
            }
        }
        // console.log(maxLeft,maxRight);

        for(let page=maxLeft; page <= maxRight; page++){
            wrapper.innerHTML += `<button value=${page} class="page btn   btn-info"> ${page}</button>`
        }

        if(data.page !==1){
            wrapper.innerHTML = `<button value=${1} class="page btn  btn-info">&#171; First</button>` + wrapper.innerHTML
        }
        if (data.page != pages) {
            wrapper.innerHTML += `<button value=${pages} class="page btn  btn-info">Last &#187;</button>`
        }

        let dynamic = document.getElementById("pagination-wrapper")
        dynamic.addEventListener("click",function(e){
        document.getElementById("table-body").innerHTML = ""
        data.page = Number(e.target.value)
        buildTable() 
        })

    }

    function buildTable(){
        let data_extract = pagination(data.queryset,data.page,data.rows)
        console.log(data_extract);
        my_list=data_extract.queryset
        for (const key in my_list) {
            // console.log(my_list[key]);
            create_row(my_list[key].id,my_list[key].name,my_list[key].email)
        }

        pageButtons(data_extract.pages)

        // for(let i=0;i < length;i++){
        //     let id =data.queryset[i]["id"]
        //     let name = data.queryset[0]["name"]
        //     let email = data.queryset[0]["email"]
        //     // console.log(data.queryset[i]["id"],  data.queryset[0]["name"],data.queryset[0]["email"]);
        //     // console.log(id,name,email);
        //     create_row(id,name,email);
        // }   

    }


    

//    console.log(  pagination(data.queryset,data.page,data.rows));
    // console.log(data.queryset[0] );
    // for(let i=0;i < length;i++){
    //     let id =data.queryset[i]["id"]
    //     let name = data.queryset[0]["name"]
    //     let email = data.queryset[0]["email"]
    //     // console.log(data.queryset[i]["id"],  data.queryset[0]["name"],data.queryset[0]["email"]);
    //     // console.log(id,name,email);
    //     create_row(id,name,email);
    // }

}




