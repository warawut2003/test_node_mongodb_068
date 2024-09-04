// Import Model
const Books = require("../models/books");

// Function add and export
exports.InsertBook = async (req,res) =>{
    const {title ,author ,published_year ,genre ,available}=req.body;

    const book = new Books({title ,author ,published_year ,genre ,available});

    try{
        const newBook = await book.save();
        res.status(201).json(newBook);
    }catch (err){
        res.status(400).json({message:err.message});
    }
}

// Function update and export
exports.updateBook = async (req,res) =>{
    try{

    
    const {id}=req.params;


    const Book = await Books.findById(id);

    if(!Book) return res.status(404).json({message:'Book not found'});
    await Books.updateOne({_id:id},{$set:req.body});
    res.status(200).json({message:'Book update Successfully'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

// Function delete and export

exports.deleteBook = async (req,res) =>{
    try{

    const {id}=req.params;
    

    const Book = await Books.findByIdAndDelete(id);

    if(!Book) {
        return res.status(404).json({message:'Book not found'});
    }else{
        res.status(200).json({message:'Book delete Successfully'});
    }
    
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

// Function get all data and export
exports.getBooks = async (req,res) =>{
    try{
        const book = await Books.find();
        res.status(200).json(book);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}


// Function get data by genre and export

exports.getBook = async (req,res) =>{
    try{
        const {genre} = req.params;


        const book = await Books.find({genre : genre});

        if(!book) return res.status(404).json({message:'Book not found'});
        res.status(200).json(book);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
