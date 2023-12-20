// let db = require('./db.js');

// async function getPgVersion() {
//     const result = await sql`select version();`;
//     console.log(result);
//   }
  
// getPgVersion();

const { sql, close } = require('./db.js'); // Adjust the path as necessary

// async function getUsers() {
//     console.log('Executing query: SELECT * FROM "User";');
//     try {
//         const result = await sql`SELECT * FROM "User";`;
//         console.log("Query executed successfully.");
//         return result;
//     } catch (error) {
//         console.error("Error executing query:", error);
//         throw error; // Re-throw the error to be caught by the caller
//     }
// }

// async function displayUsers() {
//     try {
//         console.log("Fetching users...");
//         const users = await getUsers();
//         console.log("Users fetched:", JSON.stringify(users, null, 2));
//     } catch (error) {
//         console.error("Error fetching users:", error);
//     }
// }

// displayUsers();

async function main() {
    try {
        // await displayUsers();
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await sql.close(); // Close the database connection
        process.exit(); // Exit the Node.js process
    }
}

main();



// console.log(getUsers());
// console.log(db.query("SELECT * FROM User;"));