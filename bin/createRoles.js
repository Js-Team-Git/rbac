const role = require('../authoIncrement')
const main = async () => {
    try {
      const collectionName = "roleCount"
      await role.createCounter(collectionName);
       await role.createRoles
        process.exit(0);
    } catch (err) {
        process.exit(0);
    }
}
main();