import SubCatModel from "../Model/SubCatModel.js";

//add_Sub_category
export const addSubCategory = async (request, response) => {
    try {
        const data = request.body
        const addNewSubCat = {
            sub_cat_title:String(data.sub_cat_title),
            cat_id:String(data.cat_id),
            sub_cat_name:String(data.sub_cat_name),
            sub_cat_image:String(data.sub_cat_image),
            sub_cat_meta:String(data.sub_cat_image)
        }
        const dbRes = await SubCatModel.create(addNewSubCat)
        if(dbRes){
            response.json({
               status:"success",
               message:"sub_catoregory added successfully" 
            })
        }
        else{
            response.json({
                status:"success",
                message:"invalid details"
            })
        }
    }
    catch (err) {
        response.json({
                status:"failed",
                error:err
            })
    }
}

//get subCategories

export const getSubCategories = async (request, response) => {
    try {
        const dbRes = await SubCatModel.find();
        if (dbRes) {
            response.json({
                status: "success",
                message: "get Subcategories successfully",
                data: dbRes
            })
        }
        else {
            response.json({
                status: "failed",
                message: "invalid detailes"

            })
        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "bad request"

        })
    }
}

//Update category
export const updateSubCategory = async (request,response,next)=>{
  try{
    
      const id = request.params.id;
      const data = request.body
      const query = {
        sub_cat_title:data.sub_cat_title,
        cat_id:data.cat_id,
        sub_cat_name:data.sub_cat_name,
        sub_cat_meta:data.sub_cat_meta
      }
      
      const dbRes = await SubCatModel.findByIdAndUpdate(id,query,{new:true})
      if(dbRes){
        response.json({
            status:"success",
            message:"Subcategory update successfully",
            data:dbRes
        })
      }
      else{
        response.json({
            status:"failed",
            message:"invalid Subcategory id"
        })
      }
  }
  catch(err){
      response.json({
        status:"failed",
        message:"something went wrong"
      })
  }
}


//delete Sub Category

export const deleteSubCategory = async(request,response,next)=>{
   try{
      const {id} = request.params
     
      const dbRes = await SubCatModel.deleteOne({_id:id})
      if(dbRes){
        response.json({
            status:"success",
            message:"Subcategory delete successfully",
            data:dbRes
            
        })
      }
      else{
        response.json({
            status:"failed",
            message:"invalid Subcategory id"
        })
      }

   }
   catch(err){
         response.json({
        status:"failed",
        message:"something went wrong"
      })
   }
}