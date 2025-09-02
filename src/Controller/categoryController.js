import CategoryModel from "../Model/CategoryModel.js"


//category section

  //add category
export const addCategory = async (request, response) => {

    try {
        const data = request.body
        const image = request.imagePath
        const addNewCategory = {
            category_name: String(data.category_name),
            category_title: String(data.category_title),
            category_image: String(image),
            category_meta: String(data.category_meta)
        }
        const dbRes = await CategoryModel.create(addNewCategory);
        if (dbRes) {
            response.json({
                status: "success",
                message: "category added successfully"
            })
        } else {
            response.json({
                status: "failed",
                message: "invalid details"
            })
        }
    }
    catch (error) {
        response.json({
            status: "failed",
            error: "error"
        })
    }

}

//get all category
export const getCategories = async (request, response) => {
    try {
        const dbRes = await CategoryModel.find();
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

