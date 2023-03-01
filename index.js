// 1. Create a "book" constructor that will create a new object.
// The parameters it should accept are: title, year of publication, cover (hard, paperback), and the method that will return `[Title], [year of publication], [type of binding]`

// 2. Create several new book instances - use the constructor for this purpose.

// 3. Play around with the code, add more methods outside the constructor.

// Bonus: Create another constructor :)



//-> Solution
// 1. Book Constructor
function Book(title, year, cover) {
    this.title = title;
    this.year = year;
    this.cover = cover;

    this.getInfo = function () {
        return `${this.title}, ${this.year}, ${this.cover}`;
    }
};
console.log('-------------------------------------');


// 2. Create Book Instances
const book1 = new Book('The Witcher: Sword of Destiny', 1992, 'hardcover');
const book2 = new Book('The Catcher in the Rye', 1951, 'paperback');
const book3 = new Book('Harry Potter and the Sorcerer\'s Stone', 1997, 'hardcover');

console.log(book1.getInfo()); //The Witcher: Sword of Destiny, 1992, hardcover
console.log(book2.getInfo()); //The Catcher in the Rye, 1951, paperback
console.log(book3.getInfo()); //Harry Potter and the Sorcerer's Stone, 1997, hardcover
console.log('-------------------------------------');


//3. Add More Methods Outside the Constructor
Book.price = function (price) {
    this.price = price;
    return `${this.title} costs €${this.price}.`;
}

// and

Book.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
};
console.log(book1.getAge()); // 31
console.log(book2.getAge()); // 72
console.log(book3.getAge()); // 26
console.log('-------------------------------------');


// Bonus: Create Another Constructor
function Book2(author, title, publisher) {
    this.author = author;
    this.title = title;
    this.publisher = publisher;

    this.getInfo = function () {
        return `${this.title} by ${this.author}, published by ${this.publisher}`;
    };
};

const book4 = new Book2("J.K. Rowling", "Harry Potter and the Philosopher's Stone", "Bloomsbury Publishing");
const book5 = new Book2("George R. R. Martin", "A Game of Thrones", "Bantam Spectra");

console.log(book4.getInfo()); // Harry Potter and the Philosopher's Stone by J.K. Rowling, published by Bloomsbury Publishing
console.log(book5.getInfo()); // A Game of Thrones by George R. R. Martin, published by Bantam Spectra



