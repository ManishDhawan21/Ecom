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
                message: "get categories successfully",
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
