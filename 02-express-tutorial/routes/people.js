const express = require("express");
const router = express.Router();

let { people } = require("../data")

const { 
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} = require("../controllers/people");



// router.get("/", getPeople)
// router.post("/", createPerson)
// router.post("/postman", createPersonPostman)
// router.put("/:id", updatePerson)
// router.delete("/:id", deletePerson)


router.route("/").get(getPeople)
router.route("/").post(createPerson)
router.route("/postman").post(createPersonPostman)
router.route("/:id").put(updatePerson)
router.route("/:id").delete(deletePerson)



module.exports = router