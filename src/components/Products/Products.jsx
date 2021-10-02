import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'; //add in styles from the products styles file 

//products are in an array 
/*const products = [
    {id: 1, name: 'Jezebel', description: 'Hibiscus, rose, coconut, vitamin-e oil, vanilla, red clover, vervain, rose quartz, clear quartz, brown sugar, and honey', price: '$5', image: './images/Jezebel.jpeg'},
    {id: 2, name: 'Lucky777', description: 'Bay leaf, lemon, orange, chamomile, mint, cinnamon, ginger, patchouli, adaventrine, jasmine, rose hip, and cintrine ', price: '$5', image: './images/Luck.jpeg'},
    {id: 3, name: 'ProtectionOil', description: 'Olive oil, nettles, vervain, rosemary, thyme, sage, black salt, garnet, eucalyptus, mugwort ', price: '$5', image: './images/ProtectionOil.JPG'},
    {id: 4, name: 'Rosewater', description: 'Rose petals, aloe Vera, rose quartz, clear Quartz’s, purified moon water! Ultimate blend is mixed with lavender and rosemary!', price: '$5', image: './images/Rosewater.jpg'},
    
]; */

//products class

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles(); 
    
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} /> 
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => ( 
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={ onAddToCart }/> 
                    </Grid> 
                    ))}
            </Grid>
        </main>
    )
}

export default Products;