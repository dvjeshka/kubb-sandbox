import { setupWorker } from 'msw/browser'
import {handlers} from 'kubb-lib/handlers/handlers'


export const worker = setupWorker(...handlers)