import ProductModel from "../Model/ProductModel.js"
import client from "../redis/redis.js"
export const addProduct = async (request, response, next) => {
   try {

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
         product_image: image.image1[0].filename,
         product_image_2: image.image2[0].filename,
         product_title: data.product_title,
         product_meta: data.product_meta,
         product_description: data.product_description
      }
      const DbRes = await ProductModel.create(query);

      if (DbRes) {
         response.json({
            status: "success",
            message: "product successfully added"
         })
      }
      else {
         response.json({
            status: "failed",
            message: "invalid details"
         })
      }
   }
   catch (err) {
      response.json({
         status: "failed",
         message: "bad request",
         error: err
      })
   }
}

export const getProduct = async (request, response) => {
   try {
      const d = await client.get("myDataToken");
      if (d){
         console.log("redis  get call...")
         return response.json({
            status: "success",
            data: JSON.parse(d)
         })

      }
      const dbRes = await ProductModel.find({});
      console.log("redis data set")
      await client.set("myDataToken",JSON.stringify(dbRes));
      if (dbRes) {
         response.json({
            status: "success",
            data: dbRes
         })
      }
      else {
         response.json({
            status: "failed",
            message: "invalid details"
         })
      }
   }
   catch (err) {
      response.json({
         status: "failed",
         message: "bad request",
         error: err
      })
   }
}