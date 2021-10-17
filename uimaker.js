let getDetais=(news)=>{
    let viewport=document.createElement('div')
        if(news.length===0){
            viewport.innerHTML=`<h1 style="color:#fff">your requested news not found!</h1>`;
        // document.querySelector('.container').append(viewport);
        return viewport;
        }     
        for(let i=0;i<=10;i++) {
        //console.log(food)
        let newsContainer=document.createElement('div');
        newsContainer.className='newsContainer'
        //newsContainer.style.display="flex";
        var imageContainer=document.createElement('div')
        let newsImage=document.createElement('img');
        newsImage.id='img_size'
        newsImage.src=news[i].urlToImage;
        let title=document.createElement('h3');title.className='newsheading'
        title.textContent=news[i].source.name;
        
        imageContainer.appendChild(title)
        imageContainer.appendChild(newsImage);
        newsContainer.appendChild(imageContainer)
        
        // "articles":[{"source":{"id":null,"name":"NDTV News"},
        // "author":null,
        // "title":"2 More Non-Local Labourers Shot Dead By Terrorists In Jammu And Kashmir - NDTV",
        
        //"description":"Two more non-local labourers were gunned down by terrorists in Kashmir today, taking the number of civilians killed in targeted attacks in Jammu and Kashmir this month to 11.",
        // "url":"https://www.ndtv.com/india-news/2-more-non-local-labourers-shot-dead-by-terrorists-in-jammu-and-kashmir-2578555"

        // "urlToImage":"https://c.ndtvimg.com/2021-10/6u87m47g_kashmir-killing_650x400_17_October_21.jpg","publishedAt":"2021-10-17T14:23:06Z",

        var dataContainer=document.createElement('div')
        let headingNews=document.createElement('h3')
        headingNews.textContent=news[i].title;
        let descriptionNews=document.createElement('h4');
        descriptionNews.textContent=news[i].description;
        dataContainer.appendChild(headingNews);dataContainer.appendChild(descriptionNews);
        let time=document.createElement('p');time.textContent=news[i].publishedAt; dataContainer.appendChild(time);
        let weblink=document.createElement('h3');
        let a=document.createElement('a');
        a.textContent="Read Full news";a.href=news[i].url;a.target="_blank";
        weblink.appendChild(a)
        dataContainer.appendChild(weblink);
        newsContainer.appendChild(dataContainer)  
        
        //final append
        viewport.appendChild(newsContainer);
        }
        //document.querySelector('.container').append(viewport);
        return viewport;
         }
        export default getDetais;