fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
.then(function(response){   
   return response.json()
    // console.log(response.json())
})
.then(function(data){
    data.map(function(id){
        const newsId=id
        fetch('https://hacker-news.firebaseio.com/v0/item/'+newsId+'.json?print=pretty')
        .then(function(response){
            return  response.json()
        })

        .then(function(data){
                const wrapper =document.getElementsByTagName('h1')
                 

                

                const div= document.createElement('a')//a is anchor tag
                div.innerHTML= data.title 
                div.href=data.url
                div.style.display='block'
                div.style.background='#d8e1ed'
                div.style.height='25px'
                div.style.textDecoration='none'
                div.style.color='black'
                div.style.padding='25px'
                div.style.margin='10px'
            
                document.body.appendChild(div)
    
                const br = document.createElement('br')
                br.innerHTML=data.title
                document.body.appendChild(br)

               
            })
           
        })  
    })
