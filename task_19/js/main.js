var library = [ 
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    inStock:true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    inStock: false
    
    },
    {
    author: 'Steve Jobs',
    title: "Thinking fast and slow",
    readingStatus: false,
    inStock: true
    
    },
    {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false,
    inStock: false
    }];

fetchResult();

function fetchResult(){
    let fetchResult = library.map(Detail => {
        if (Detail.readingStatus && Detail.inStock){
            document.write(Detail.title + ": Book is available" + " <br> <br>" );
        }
        else if(!Detail.readingStatus && !Detail.inStock){
            document.write(Detail.title + ": Book is out of stock" + " <br> <br>");
        }
        else if (!Detail.readingStatus || !Detail.inStock){
            document.write(Detail.title + ": Presence of the book unknown" + " <br> <br>");
        }
    })
}
