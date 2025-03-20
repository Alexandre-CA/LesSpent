// import readline from 'readline';
import { PrismaClient } from '@prisma/client';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// async function askUserConfirmation(): Promise<boolean> {
//   const databaseUrl =
//     process.env.DATABASE_URL || '❗ [DATABASE_URL não definida]';

//   console.log(`🔍 DATABASE_URL: ${databaseUrl}\n`);
//   console.log('⚠️ Esta ação pode modificar dados existentes.');

//   return new Promise((resolve) => {
//     rl.question(
//       '❓ Deseja executar o seed e popular o banco de dados? (s/n): ',
//       (answer) => {
//         const normalizedAnswer = answer.trim().toLowerCase();

//         if (normalizedAnswer === 's' || normalizedAnswer === 'sim') {
//           console.log('✅ Executando seed...');
//           resolve(true);
//         } else {
//           console.log('❌ Seed cancelado. Nenhum dado foi modificado.');
//           resolve(false);
//         }
//       }
//     );
//   });
// }

async function main() {
  // const shouldContinue = await askUserConfirmation();
  // rl.close();

  // if (!shouldContinue) return;

  // const prisma = new PrismaClient();


  console.log('✅ Seed concluído com sucesso!');
}

main()
  .then(async () => {
    const prisma = new PrismaClient();
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    const prisma = new PrismaClient();
    await prisma.$disconnect();
    process.exit(1);
  });