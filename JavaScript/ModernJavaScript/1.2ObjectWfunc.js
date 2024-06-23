let myBook ={
    title: "Harry Porter",
    author: "James",
    pageCount: 569,
}


let getSummary = (book) => {
    return {
        summary: `${book.title} by ${book.author}`,
        pageSumCount: `${book.title} is ${book.pageCount} Pages`
    }  
}

let getAuthor = getSummary(myBook);
console.log(getAuthor.summary);
console.log(getAuthor.pageSumCount);