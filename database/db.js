import mongoose from 'mongoose';

export const Connection = async(username ,password) => {
  const URL = `mongodb://${username}:${password}@ac-kbkcjex-shard-00-00.xgfl2wz.mongodb.net:27017,ac-kbkcjex-shard-00-01.xgfl2wz.mongodb.net:27017,ac-kbkcjex-shard-00-02.xgfl2wz.mongodb.net:27017/Ecommerce-web?ssl=true&replicaSet=atlas-5ykn8k-shard-0&authSource=admin&retryWrites=true&w=majority`;
  
  try{
     await mongoose.connect(URL , {useUnifiedTopology: true,useNewUrlParser: true})
    
     console.log('Database connected');
    
    }catch(error){
      console.log('error in conecting ' , error.message);
     }

}
 
export default Connection;