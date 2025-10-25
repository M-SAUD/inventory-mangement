import { PrismaClient } from "@prisma/client";


const prisma =new PrismaClient();

async function main (){
    const demoUserId="2d6feac4-c389-47b8-90e8-777b1c27bb80";


    await prisma.product.createMany({
        data:Array.from({length:25}).map((_,i)=>({
            userId:demoUserId,
            name:`Product ${i+1}`,
            price:(Math.random()*90+10).toFixed(2),
            quantity:Math.floor(Math.random()*20),
            lowStockAt:5,
            createdAt:new Date(Date.now()-1000*60*60*24*(i*5)),
            
        }))
    });

    console.log("Seed data Created Successfully")
    console.log(`Created 25 Produts for userId ID: ${demoUserId}`)
}

main()
 .catch((e)=>{
    console.error(e)
    process.exit(1)
 })
 .finally(async()=>{
    await prisma.$disconnect();
 });