const DB_URI=
"mongodb+srv://usuario:ek6yrarh3lBrEtPN@cluster0.kio9ahe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const API=
process.env.NODE_ENV === "production" 
? "https://xxx.vercel.com:3000/api"
:"http://localhost:3000/api";
const NEXTAUTH_SECRET="SUDAFEWO938UR03294UR84390IU";
module.exports = {
    DB_URI,
    API,
    NEXTAUTH_SECRET,
};
