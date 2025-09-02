import ProductModel from "../Model/ProductModel.js"

ProductModel
export const addProduct = async (request, response, next) => {
   try{

     const data = request.body
    const image = request.files

    const query = {
        product_name: data.product_name,
        cat_id: data.cat_id,
        sub_cat_id: data.sub_cat_id,
        product_price: data.product_price,
        product_rating: data.product_rating,
        product_stock: data.product_stock,
        product_discount: data.product_discount,
        product_image:image.image1[0].filename,
        product_image_2: image.image2[0].filename,
        product_title: data.product_title,
        product_meta: data.product_meta,
        product_description: data.product_description
     }
     const DbRes = await ProductModel.create(query);

     if(DbRes){
        response.json({
            status:"success",
            message:"product successfully added"
        })
     }
     else{
        response.json({
            status:"failed",
            message:"invalid details"
        })
     }
   }
   catch(err){
      response.json({
        status:"failed",
        message:"bad request",
        error:err
      })
   }
}