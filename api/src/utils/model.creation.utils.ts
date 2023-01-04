import { IModelCreationUtils } from "./interfaces/model.creation.utils";

export default class ModelCreationUtils implements IModelCreationUtils {
    CreateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
              v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}