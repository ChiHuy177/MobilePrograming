import { View } from 'react-native';

import React, { useState } from 'react';
import ProductList from './Product/Product';
import Product_Add from './Product/AddProduct';
import ProductSearch from './Product/Product_Search';
import Product_Detail from './Product/Product_Details';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default App = () => {
  const [index, setIndex] = useState(0);
  const[routes] = useState([
    {key: 'ProductList', title: 'Products', icon:"folder"},
    {key: 'Product_Add', title: 'Add', icon:"folder"},
    {key: 'ProductSearch', title: 'Search', icon:"folder"},
    {key: 'Product_Detail', title: 'Detail', icon:"folder"},
  ])
  const rendenScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    ProductSearch: ProductSearch,
    Product_Add: Product_Add,
    Product_Detail: Product_Detail,
  });


  return(
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={rendenScene}
      />
    </SafeAreaProvider>
    
  )
  
}