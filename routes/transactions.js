const express=require('express');
const router=express.Router();
const {getTransactions, addtTransaction, deleteTransaction}=require('../controllers/transactions');

router
    .route('/')
    .get(getTransactions)
    .post(addtTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);
module.exports=router;