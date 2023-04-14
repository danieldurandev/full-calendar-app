const { Router } = require("express");

const {
  getEvento,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validarJwt");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validarCampos");
const { isDate } = require("../helpers/isDate");

const router = Router();

router.use(validarJWT);

router.get("/", getEvento);
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),

    validarCampos,
  ],
  crearEvento
);
router.put("/:id", actualizarEvento);
router.delete("/:id", eliminarEvento);

module.exports = router;
