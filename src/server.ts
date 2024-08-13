import { app } from "./index";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on the port : ${PORT}`);
});
