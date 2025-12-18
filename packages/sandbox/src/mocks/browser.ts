import { setupWorker } from 'msw/browser'
import { handlers } from 'kubb-lib/handlers/handlers'
import { getListHandler } from "kubb-lib/handlers/getListHandler";
import { LIST_DTO } from "./data";

const myDataHandlers = [
    getListHandler(LIST_DTO)]

export const worker = setupWorker(
    ...myDataHandlers,
    ...handlers, // уже с фейковыми данными сгенерированными faker
)