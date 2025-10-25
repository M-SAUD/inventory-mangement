"use server"
import { error } from "console";
import { getCurrentUser } from "../auth";
import { prisma } from "../prisma";
import {z} from "zod"

const ProductSchema=z.object({
    name:z.string().min(1,"Name is required"),
    price:z.coerce.number().nonnegative("Price must be non-Negative"),
    sku:z.string().optional(),
    quantity:z.coerce.number().int().min(0,"Quantity must be non-Negative"),
    lowStockAt:z.coerce.number().int().min(0).optional(),
})

export async function deleteProduct(formData :FormData){
    const user =await getCurrentUser()
    const id = String(formData.get("id")|| "");
  
    await prisma.product.deleteMany({
        where:{id:id,userId:user.id}
    })
}

export async function createProduct(formData :FormData){
    const user =await getCurrentUser()
   
    const parsed= ProductSchema.safeParse({
        name:formData.get("name"),
        price:formData.get("price"),
        sku:formData.get("sku")|| undefined,
        quantity:formData.get("quantity"),
        lowStockAt:formData.get("lowStockAt")|| undefined,
    })
 
    if(!parsed.success){
        throw new Error("Validation Failed")
    }
    try{
    await prisma.product.create({
        data:{...parsed.data,userId:user.id}
    })
    }catch (error){
          throw new Error("Failed to Create Product")
    }
}
