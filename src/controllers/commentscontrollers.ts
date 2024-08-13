import { Request, Response } from "express";
import { CommentsModel } from "../models/comments/comments-model";

export const addAnewComment = async (req: Request, res: Response) => {
  const { name, email, githubuser, comment } = req.body;

  // Verifica se todos os campos necessários estão presentes
  if (!name || !email || !githubuser || !comment) {
    return res.status(400).json({ msg: "Por favor, preencha todos os campos." });
  }

  try {
    // Cria um novo comentário com os dados fornecidos
    const create = new CommentsModel({
      name,
      email,
      githubuser,
      comment,
    });

    // Salva o comentário no banco de dados
    await create.save();

    // Retorna uma resposta de sucesso
    return res.status(201).json({ msg: "Criado com Sucesso" });
  } catch (error) {
    // Loga o erro para depuração
    console.error("Falha ao Enviar Comentário", error);

    // Retorna uma resposta de erro com código 500
    return res.status(500).json({ msg: "Falha ao Enviar Comentário" });
  }
};



export const getAllComments = async (req : Request, res : Response) =>{
  
  try{
    const allcomments = await CommentsModel.find();
    if(allcomments.length === 0){
      console.log("Nenhum comentário Cadastrado")
      return res.status(404).send({msg : "Nenhum comentário Encontrado"})
    }

  return res.status(200).send(allcomments)

  }catch(error){
    console.log("Falha ao Obter comentários", error)
    res.status(400).send({msg : "Falha ao obter Comentários"})
  }

}