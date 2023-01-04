import ModelCreationUtils from "../../utils/model.creation.utils";
import { AnimalsController } from "../controllers/animals.controller";
import { AnimalsRepository } from "../repositories/animals.repository";
import { AnimalsService } from "../services/animals.service";

function AnimalsFactory() {
    const animalsRepository = new AnimalsRepository();
    const modelCreationUtils = new ModelCreationUtils();
    const animalsService = new AnimalsService(animalsRepository, modelCreationUtils);
    const animalsController = new AnimalsController(animalsService);

    return animalsController;
}

const animalsFactory = AnimalsFactory();
export default animalsFactory;