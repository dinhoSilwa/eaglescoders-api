import mongoose from "mongoose";
import "dotenv/config";

export const connectdbMONGO = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Conectado com Sucesso");
  } catch (error) {
    console.log("Falha ao Conectar");
    process.exit(1);
  }
};
